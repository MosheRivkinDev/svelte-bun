<script lang="ts">
	import { enhance } from '$app/forms';
	import { parse } from 'valibot';
	import { CreateUserSchema } from './vbot';
	export let data;
	let create_user_form: HTMLFormElement;
	const user_data = {
		name: '',
		email: ''
	};
</script>

<section>
	<label for="name"> name </label>
	<input type="text" name="name" bind:value={user_data.name} />
	<label for="email"> email </label>
	<input type="email" name="email" bind:value={user_data.email} />

	<button
		on:click={() => {
			create_user_form.requestSubmit();
		}}>Submit</button
	>
</section>
<ul class="flex flex-col">
	{#each data.users as user}
		<li>
			{user.name}
		</li>
	{/each}
</ul>
<form
	action="?/create_user"
	method="post"
	bind:this={create_user_form}
	use:enhance={({ formData }) => {
		try {
			const valid_user_data = parse(CreateUserSchema, user_data);
			formData.append('user_data', JSON.stringify(valid_user_data));
			return ({ result }) => {
				switch (result.type) {
					case 'success':
						//@ts-ignore
						data.users.push({ ...valid_user_data, id: result.data?.id });
						data.users = data.users;

						break;
					case 'failure':
						console.error(result.data?.message);

						break;

					default:
						break;
				}
			};
		} catch (e) {
			console.log('error: ', e);
		}
	}}
></form>
test test test test
