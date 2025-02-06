import { createRequestHandler } from "@react-router/express";
import { drizzle } from "drizzle-orm/better-sqlite3";
import express from "express";
import Database from "better-sqlite3";
import "react-router";
import { DatabaseContext } from "~/database/context";
import * as schema from "~/database/schema";

declare module "react-router" {
  interface AppLoadContext {
    COOKIE_SECRET: string;
  }
}
export const app = express();
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}
const client = new Database(process.env.DATABASE_URL);
const db = drizzle(client, { schema });
app.use((_, __, next) => DatabaseContext.run(db, next));
app.use(
  createRequestHandler({
    // @ts-expect-error - virtual module provided by React Router at build time
    build: () => import("virtual:react-router/server-build"),
    getLoadContext() {
      return {
        COOKIE_SECRET: process.env.COOKIE_SECRET!,
      };
    },
  }),
);
