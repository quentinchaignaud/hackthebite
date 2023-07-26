<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, Input, Label, Link, ModalDelete } from '$lib/components';
	import type { ActionResult } from '@sveltejs/kit';
	import toast from 'svelte-french-toast';

	export let form;

	let deleteAccountModalOpen: boolean;
	$: deleteAccountModalOpen = false;

	const updateUsername = () => {
		return async ({ result, update }: { result: ActionResult; update: Function }) => {
			switch (result.type) {
				case 'success':
					toast.success('Le pseudo à bien été modifié !');
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
	const updatePassword = () => {
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

<div class="py-24 sm:py-32 min-h-screen text-gray-900 dark:text-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">Compte</h2>
			</div>
			<form>
				<div class="space-y-12">
					<div class="border-b border-gray-900/10 pb-12">
						<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<form
								use:enhance={updateUsername}
								action="?/updateUsername"
								method="POST"
								class="sm:col-span-4 lg:col-span-6"
							>
								<Label forId="username" text="Changer le pseudo" />
								<div class="mt-2 flex flex-row">
									<div class="w-3/4">
										<Input id="username" type="text" errors={form?.errors?.username} />
									</div>
									<div class="w-1/4 ml-2">
										<Button text="Sauvegarder" />
									</div>
								</div>
							</form>
						</div>
					</div>
					<form
						use:enhance={updatePassword}
						action="?/updatePassword"
						method="POST"
						class="border-b border-gray-900/10 pb-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
					>
						<div class="sm:col-span-4 lg:col-span-6">
							<Label forId="oldPassword" text="Ancien mot de passe" />
							<div class="mt-2 flex flex-row">
								<Input id="oldPassword" type="password" value="" errors="" />
							</div>
							<div class="text-sm mt-2">
								<Link url="/auth/changer-mot-de-passe" text="Mot de passe oublié?" />
							</div>
						</div>
						<div class="sm:col-span-4 lg:col-span-6">
							<Label forId="password" text="Nouveau mot de passe" />
							<div class="mt-2 flex flex-row">
								<Input id="password" type="password" value="" errors="" />
							</div>
						</div>
						<div class="sm:col-span-4 lg:col-span-6">
							<Label forId="passwordConfirm" text="Confirmer le nouveau mot de passe" />
							<div class="mt-2 flex flex-row">
								<Input id="passwordConfirm" type="password" value="" errors="" />
							</div>
						</div>
						<div class="w-60">
							<Button text="Mofidier le mot de passe" />
						</div>
					</form>
					{#if deleteAccountModalOpen}
						<ModalDelete
							functionPassed={() => (deleteAccountModalOpen = !deleteAccountModalOpen)}
						/>
					{/if}
					<div class="border-b border-gray-900/10 pb-12">
						<div class="flex items-center justify-between mt-10">
							<span class="flex flex-grow flex-col">
								<Label text="Supprimer le compte" />
								<span class="text-sm text-gray-500 dark:text-gray-300" id="availability-description"
									>Toute suppression est définitive.</span
								>
							</span>
							<div class="w-2/5">
								<Button
									functionPassed={() => (deleteAccountModalOpen = !deleteAccountModalOpen)}
									dangerous
									type="button"
									text="Supprimer le compte"
								/>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
