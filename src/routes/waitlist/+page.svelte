<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components';
	import type { ActionResult } from '@sveltejs/kit';
	import toast from 'svelte-french-toast';

	const submitEmailWaitlist = () => {
		return async ({ result, update }: { result: ActionResult; update: Function }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'error':
					toast.error(result.error.message);
					break;
				default:
					await update();
			}
		};
	};
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
			Liste d'attente
		</h2>
		<p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
			Vous recevrez un mail lors de la prochaine vague d'inscription.
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white dark:bg-gray-800 px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<form
                use:enhance={submitEmailWaitlist}
				action="?/submitEmailWaitlist"
				method="POST"
				class="space-y-6"
			>
				<div>
					<label
						for="email"
						class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
						>Adresse mail</label
					>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="px-2 block dark:bg-gray-700 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 place dark:ring-gray-500 holder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indig5-600 sm:text-sm sm:leading-6 dark:text-white"
						/>
					</div>
				</div>

				<div>
					<Button text="S'inscrire" />
				</div>
			</form>
		</div>
	</div>
</div>
