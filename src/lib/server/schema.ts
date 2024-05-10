import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users_tbl = sqliteTable('users', {
	id: integer('id').primaryKey(),
	name: text('name', { length: 50 }),
	email: text('email', { length: 50 })
});
