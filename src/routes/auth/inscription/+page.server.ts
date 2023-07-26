import { error, redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { registerUserSchema } from '$lib/schema';
import { validateData } from '$lib/utils';

export const actions = {
    register: async ({ locals, request }) => {
        const { formData, errors } = await validateData(await request.formData(), registerUserSchema);

        if (errors) {
            return fail(400,
                {
                    data: formData,
                    errors: errors.fieldErrors
                }
                
            );
        }
        const username = formData.username.toString().split(" ").join("")
        try {
            await locals.pb.collection('users').create({ username, ...formData })
            await locals.pb.collection('users').requestVerification(formData.email)
        } catch (err) {
            console.log('Error ', err);
            throw error(500, 'Something went wrong')
        }

        throw redirect(303, '/')
    }
} satisfies Actions;