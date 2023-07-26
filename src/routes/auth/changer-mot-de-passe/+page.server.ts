import { error, fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { changePasswordSchema } from '$lib/schema';
import { validateData } from '$lib/utils';

export const actions = {
	resetPassword: async ({ request, locals }) => {
		const { formData, errors } = await validateData(await request.formData(), changePasswordSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}
		try {
			await locals.pb.collection('users').requestPasswordReset(formData.email);
			return {
				success: true
			};
		} catch (err) {
			throw error(500, 'Something went wrong');
		}
	}
} satisfies Actions;
