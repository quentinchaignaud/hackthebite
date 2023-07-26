import { error, redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { changePasswordSchema } from '$lib/schema';
import { validateData } from '$lib/utils';
import type { LayoutServerLoad } from '../$types';

export const load = (async ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/auth/connexion');
	}
}) satisfies LayoutServerLoad;

export const actions = {
	submitEmailWaitlist: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), changePasswordSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}
		try {
			await locals.pb.collection('waitlist').create({ email: formData.email });
			return {
				success: true
			};
		} catch (err) {
			throw error(500, 'Something went wrong');
		}

	}
} satisfies Actions;
