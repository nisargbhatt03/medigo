import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import path from "path";
import fs from "fs";
import * as schema from "./schema";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  const envPath = path.resolve(__dirname, "../../../.env");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    const match = envContent.match(/DATABASE_URL=(.+)/);
    if (match) {
      process.env.DATABASE_URL = match[1].trim();
    }
  }
}

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool, { schema });

export * from "./schema";
