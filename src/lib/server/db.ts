import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import { DB_PATH } from '$env/static/private';

const sqlite = new Database(DB_PATH);
export const db = drizzle(sqlite);
