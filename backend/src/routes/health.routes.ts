import { Router, type Request, type Response } from "express";

const router = Router();

/**
 * GET /api/health
 * Liveness probe — used by:
 *   - Frontend during dev to confirm backend is reachable
 *   - Railway/Render to determine if the service is healthy
 *   - Uptime monitors (Phase 9)
 */
router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    service: "queenbee-api",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

export default router;