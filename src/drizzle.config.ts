import { defineConfig } from 'drizzle-kit';
export default defineConfig({
	dialect: 'sqlite',
	schema: './src/lib/server/schema.ts',
	out: '../db/migrations',
	dbCredentials: {
		url: `file:../db/db.sqlite`
	}
});
