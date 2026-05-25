import mongoose from "mongoose";
import { env } from "@/config/env";
import { logger } from "@/utils/logger";

/**
 * Connect to MongoDB Atlas using Mongoose
 */

export const connectDB = async (): Promise<typeof mongoose> => {
  mongoose.set("strictQuery", true);

  // Auto-build indexes only in dev. In prod, indexes are managed
  // out-of-band to avoid blocking startup on large collections.
  mongoose.set("autoIndex", env.NODE_ENV !== "production");

  try {
    const conn = await mongoose.connect(env.MONGO_URI, {
      // 10s to find a server. Fail fast — don't hang on bad URIs.
      serverSelectionTimeoutMS: 10_000,
      appName: "queenbee-api",
    });

    logger.success(
      `[mongo] connected → ${conn.connection.host} / db: ${conn.connection.name}`
    );

    return conn;
  } catch (error) {
    logger.error("[mongo] initial connection failed:", error);
    throw error;
  }
};

/**
 * Register global Mongoose connection event listeners.
 */
export const registerDBListeners = (): void => {
  const connection = mongoose.connection;

  connection.on("disconnected", () => {
    logger.warn("[mongo] disconnected");
  });

  connection.on("reconnected", () => {
    logger.success("[mongo] reconnected");
  });

  connection.on("error", (err: Error) => {
    logger.error("[mongo] runtime error:", err);
  });
};

/**
 * closing the  MongoDB connection.
 * Called from server.ts during SIGTERM/SIGINT.
 */
export const closeDB = async (): Promise<void> => {
  await mongoose.connection.close();
  logger.info("[mongo] connection closed");
};

/**
 * Lightweight liveness probe used by /api/health.
 * Returns true if Mongoose reports an active connection.
 */
export const isDBHealthy = (): boolean => {
  // readyState: 0 disconnected · 1 connected · 2 connecting · 3 disconnecting
  return mongoose.connection.readyState === 1;
};