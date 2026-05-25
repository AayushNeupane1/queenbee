import { Router, type Request, type Response } from "express";
import { isDBHealthy } from "@/config/db";

const router = Router();


router.get("/", (_req: Request, res: Response) => {
  const dbHealthy = isDBHealthy();

  res.status(dbHealthy ? 200 : 503).json({
    status: dbHealthy ? "ok" : "degraded",
    service: "queenbee-api",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    dependencies: {
      database: dbHealthy ? "ok" : "down",
    },
  });
});

export default router;