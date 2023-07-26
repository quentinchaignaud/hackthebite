<script lang="ts">
	import { Button, Input, Label } from '$lib/components';
	export let form;
</script>

<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
			S'inscrire
		</h2>
		<p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
			L'accès au cours est limité le temps du développement. Vous devez disposez d'une invitation
			reçue par mail. Si ce n'est pas le cas, vous pouvez vous inscrire sur
			<a
				href="/waitlist"
				class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 hover:dark:text-indigo-300"
				>la liste d'attente.</a
			>
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white dark:bg-gray-800 px-4 py-8 shadow sm:rounded-lg sm:px-10">
			<form action="?/register" method="POST" class="space-y-6">
				<div>
					<Label forId="username" text="Pseudo" />
					<div class="mt-2">
						<Input
							id="username"
							type="text"
							value={form?.data?.username}
							errors={form?.errors?.username}
						/>
					</div>
				</div>
				<div>
					<Label forId="email" text="Adresse mail" />
					<div class="mt-2">
						<Input 
							id="email" 
							type="email" 
							value={form?.data?.email} 
							errors={form?.errors?.email} 
						 />
					</div>
				</div>
				<div>
					<Label forId="password" text="Mot de passe" />
					<div class="mt-2">
						<Input
							id="password"
							type="password"
							errors={form?.errors?.password}
						/>
					</div>
				</div>
				<div>
					<Label forId="passwordConfirm" text="Confirmer le mot de passe" />
					<div class="mt-2">
						<Input
							id="passwordConfirm"
							type="password"
							errors={form?.errors?.passwordConfirm}
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
