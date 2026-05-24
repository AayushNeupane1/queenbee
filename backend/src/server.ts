import { createApp } from "@/app";
import { env } from "@/config/env";
import { logger } from "@/utils/logger";

const app = createApp();

const server = app.listen(env.PORT, () => {
  logger.success(
    `Queen Bee API running on http://localhost:${env.PORT} [${env.NODE_ENV}]`
  );
});

/* ----- GRACEFUL SHUTDOWN ----- */
const shutdown = (signal: string): void => {
  logger.warn(`${signal} received, shutting down gracefully...`);
  server.close(() => {
    logger.info("Server closed");
    process.exit(0);
  });
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

process.on("unhandledRejection", (reason) => {
  logger.error("Unhandled promise rejection:", reason);
  process.exit(1);
});