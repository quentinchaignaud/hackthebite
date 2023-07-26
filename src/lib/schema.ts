import { z } from 'zod';

export const loginUserSchema = z.object({
	email: z
		.string({ required_error: 'Une adresse mail est requise.' })
		.email({ message: `L'adresse mail n'est pas valide.` }),
	password: z.string({ required_error: 'Un mot de passe est requis.' })
});

export const changePasswordSchema = z.object({
	email: z
		.string({ required_error: 'Une adresse mail est requise.' })
		.email({ message: `L'adresse mail n'est pas valide.` }),
});

export const registerUserSchema = z.object({
	username: z
		.string({ required_error: 'Un pseudo est requis' })
		.regex(/^[a-zA-Z0-9\s]*$/, {
			message: 'Le pseudo ne doit comprendre que des lettres, des chiffres et des espaces.'
		})
		.min(2, { message: 'Le pseudo doit faire plus de 2 caractères.' })
		.max(64, { message: 'Le pseudo doit faire moins de 64 caractères.' })
		.trim(),
	email: z
		.string({ required_error: 'Un mot de passe est requis.' })
		.email({ message: `L'adresse mail n'est pas valide.` }),
	password: z
		.string({ required_error: 'Un mot de passe est requis.' })
		.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
			message:
				'Le mot de passe doit contenir au moins 8 caractères, une lettre, un chiffre, et un caractère spécial.'
		}),
	passwordConfirm: z
		.string({ required_error: 'Un mot de passe de confirmation est requis.' })
		.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
			message:
				'Le mot de passe doit contenir au moins 8 caractères, une lettre, un chiffre, et un caractère spécial.'
		})
}).superRefine(({ passwordConfirm, password }, context) => {
	if (passwordConfirm !== password) {
		context.addIssue({
			code : z.ZodIssueCode.custom,
			message: 'Les mots de passe ne correspondent pas.',
			path: ['password']
		});
		context.addIssue({
			code : z.ZodIssueCode.custom,
			message: 'Les mots de passe ne correspondent pas.',
			path: ['passwordConfirm']
		});
	}
});

export const updateUsernameSchema = z.object({
	username: z
		.string({ required_error: 'Un pseudo est requis' })
		.regex(/^[a-zA-Z0-9\s]*$/, {
			message: 'Le pseudo ne doit comprendre que des lettres, des chiffres et des espaces.'
		})
		.min(2, { message: 'Le pseudo doit faire plus de 2 caractères.' })
		.max(64, { message: 'Le pseudo doit faire moins de 64 caractères.' })
		.trim(),
});