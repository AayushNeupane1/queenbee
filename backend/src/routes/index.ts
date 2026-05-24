import { Router } from "express";
import healthRoutes from "@/routes/health.routes";

const router = Router();

router.use("/health", healthRoutes);

/* Future routes 
   router.use("/products", productRoutes);
   router.use("/categories", categoryRoutes);
   router.use("/inquiries", inquiryRoutes);
   router.use("/orders", orderRoutes);
   router.use("/auth", authRoutes);
*/

export default router;