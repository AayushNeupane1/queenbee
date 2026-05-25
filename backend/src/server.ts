import { createApp } from "@/app";
import { env } from "@/config/env";
import { logger } from "@/utils/logger";
import { connectDB, closeDB, registerDBListeners } from "@/config/db";

/**
 * Bootstrap sequence:
 *   1. Connect to MongoDB (fail fast if unreachable)
 *   2. Register connection listeners for runtime events
 *   3. Build the Express app
 *   4. Start listening
 *
 * Order matters: we only accept HTTP traffic after the DB is live.
 */
const bootstrap = async (): Promise<void> => {
  try {
    await connectDB();
    registerDBListeners();

    const app = createApp();
    const server = app.listen(env.PORT, () => {
      logger.success(
        `Queen Bee API running on http://localhost:${env.PORT} [${env.NODE_ENV}]`
      );
    });

    /* shutdown */
    const shutdown = async (signal: string): Promise<void> => {
      logger.warn(`${signal} received — shutting down gracefully...`);

      server.close(async () => {
        await closeDB();
        logger.info("HTTP server closed. Exiting.");
        process.exit(0);
      });

      // If shutdown takes more than 10s, force-exit to avoid hanging containers
      setTimeout(() => {
        logger.error("Forced shutdown after 10s timeout");
        process.exit(1);
      }, 10_000).unref();
    };

    process.on("SIGTERM", () => void shutdown("SIGTERM"));
    process.on("SIGINT", () => void shutdown("SIGINT"));

    process.on("unhandledRejection", (reason) => {
      logger.error("Unhandled promise rejection:", reason);
      process.exit(1);
    });
  } catch (error) {
    logger.error("Boot failed:", error);
    process.exit(1);
  }
};

void bootstrap();