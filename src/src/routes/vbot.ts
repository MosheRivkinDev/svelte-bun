import { email, maxLength, minLength, object, string } from 'valibot';

export const CreateUserSchema = object({
	name: string('name is required', [
		minLength(3, 'name must be at least 3 characters long'),
		maxLength(50, 'name cannot be longer than 50 characters')
	]),
	email: string('email is required', [email('Please enter a valid email address')])
});
