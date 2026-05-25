import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();


const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
    
  PORT: z
    .string()
    .default("5000")
    .transform((val) => parseInt(val, 10)),
  CORS_ORIGIN: z.string().default("http://localhost:3000"),

  MONGO_URI: z
  .string()
  .min(10, "MONGO_URI is required and must be a valid connection string"),

  JWT_SECRET: z.string().min(8, "JWT_SECRET must be at least 8 chars"),
  JWT_EXPIRES_IN: z.string().default("7d"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(" Invalid environment variables:");
  console.error(parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsed.data;