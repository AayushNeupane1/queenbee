import express, { type Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "@/config/env";
import routes from "@/routes";
import { errorHandler, notFoundHandler } from "@/middleware/errorHandler";

/**
 * Creates and configures the Express application.
 * Kept separate from server.ts so it can be imported
 * for testing without starting an HTTP listener.
 */
export const createApp = (): Application => {
  const app = express();

  /* ----- SECURITY & PARSING ----- */
  app.use(helmet());
  app.use(
    cors({
      origin: env.CORS_ORIGIN.split(",").map((s) => s.trim()),
      credentials: true,
    })
  );
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: true, limit: "10kb" }));

  /* ----- LOGGING ----- */
  if (env.NODE_ENV !== "test") {
    app.use(morgan(env.NODE_ENV === "production" ? "combined" : "dev"));
  }

  /* ----- ROUTES ----- */
  app.use("/api", routes);

  /* ----- ERROR HANDLING (must be last) ----- */
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};