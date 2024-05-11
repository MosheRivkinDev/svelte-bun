import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "sqlite",
  schema: "../src/src/lib/server/schema.ts",
  out: "./migrations",
  dbCredentials: {
    url: `file:./db.sqlite`,
  },
});
