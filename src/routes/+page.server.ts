import { parse } from 'valibot';
import type { PageServerLoad } from './$types';
import { CreateUserSchema } from './vbot';
import { db } from '$lib/server/db';
import { users_tbl } from '$lib/server/schema';
import { fail } from '@sveltejs/kit';

export const load = (async () => {
	const users = await db.select().from(users_tbl).all();
	return { users };
}) satisfies PageServerLoad;

export const actions = {
	create_user: async ({ request }) => {
		try {
			const data = await request.formData();
			const user_data = parse(CreateUserSchema, JSON.parse(data.get('user_data') as string));
			const id = await db.insert(users_tbl).values(user_data).returning({ id: users_tbl.id });
			console.log('user created ', id);
			return { id: id[0].id };
		} catch (e) {
			console.error('Error creating user:', e);
			return fail(403, { message: 'Failed to create user' });
		}
	}
};
