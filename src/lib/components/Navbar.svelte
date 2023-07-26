<script lang="ts">
	import { UserMenu } from '$lib/components';
	import logo from '$lib/images/logo.svg';

	export let currentTheme: string;
	export let currentUser: string;

	let showMenuMobile = false;
</script>

<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
	<div class="flex lg:flex-1">
		<a href="/" class="-m-1.5 p-1.5">
			<span class="sr-only">Quentin Chaignaud</span>
			<img class="h-8 w-auto" src={logo} alt="Logo" />
		</a>
	</div>
	<div class="flex lg:hidden">
		{#if currentUser}
			<div class="mr-2 lg-mr-0">
				<UserMenu username={currentUser} />
			</div>
		{:else}
			<a
				href="/auth/connexion"
				class="ml-6 mr-4 lg-mr-0 flex items-center text-sm font-semibold leading-6 text-gray-900 dark:text-white"
				>Se connecter</a
			>
		{/if}
		<button
			on:click={() => (showMenuMobile = !showMenuMobile)}
			type="button"
			class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
	</div>
	<div class="hidden gap-x-2 lg:flex lg:flex-1 lg:justify-end">
		<button
			on:click
			type="button"
			class="inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-gray-800"
		>
			{#if currentTheme == 'dark'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-4 h-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-4 h-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
					/>
				</svg>
			{/if}
		</button>
		{#if currentUser}
			<UserMenu username={currentUser} />
		{:else}
			<a
				href="/auth/connexion"
				class="ml-6 flex items-center text-sm font-semibold leading-6 text-gray-900 dark:text-white"
				>Se connecter <span class="mx-2" aria-hidden="true">&rarr;</span></a
			>
		{/if}
	</div>
</nav>
{#if showMenuMobile}
	<div class="lg:hidden" role="dialog" aria-modal="true">
		<div class="fixed inset-0 z-10" />
		<div
			class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900"
		>
			<div class="flex items-center justify-between">
				<a
					on:click={() => (showMenuMobile = !showMenuMobile)}
					href="/"
					class="-m-1.5 p-1.5 dark:text-gray-300"
				>
					<span class="sr-only">Quentin Chaignaud</span>
					<img class="h-8 w-auto" src={logo} alt="Logo" />
				</a>
				<button
					on:click={() => (showMenuMobile = !showMenuMobile)}
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
				>
					<span class="sr-only">Fermer le menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="py-6">
					<button
						on:click
						type="button"
						class="inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-200 dark:bg-gray-900 dark:border-gray-600 dark:hover:bg-gray-800"
					>
						{#if currentTheme == 'dark'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
								/>
							</svg>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
								/>
							</svg>
						{/if}
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
