import { error, redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { updateUsernameSchema } from '$lib/schema';
import { validateData } from '$lib/utils';
import type { LayoutServerLoad } from '../$types';

export const load = (async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/auth/connexion');
	}
}) satisfies LayoutServerLoad;

export const actions = {
	updateUsername: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), updateUsernameSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			const { username } = await locals.pb
				.collection('users')
				.update(locals.user.id, { username: formData.username.split(' ').join('') });
			locals.user.username = username;
			return {
				success: true
			};
		} catch (err: any) {
			throw error(err.status, err.message);
		}
	},
	updatePassword: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').update(locals.user.id, body);
			locals.pb.authStore.clear();
		} catch (err: any) {
			console.log('Error ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/auth/connexion');
	},
	submitDeleteAccount: async ({ request, locals }) => {

		try {
			await locals.pb.collection('users').delete(locals.user.id);
			locals.pb.authStore.clear();
		} catch (err: any) {
			console.log('Error ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/auth/connexion');
	}
} satisfies Actions;
