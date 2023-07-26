import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { validateData } from '$lib/utils';
import { loginUserSchema } from '$lib/schema';
import type { LayoutServerLoad } from '../../$types';

export const load = (async ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
}) satisfies LayoutServerLoad;

export const actions = {
	login: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), loginUserSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		} catch (err : any) {
			throw error(err.status, err.message);
		}
		throw redirect(303, '/');
	}
} satisfies Actions;
