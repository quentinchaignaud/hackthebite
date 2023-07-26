<script lang="ts">
	export let value = '';
	export let placeholder = '';
	export let id = '';
	export let type: 'password' | 'text' | 'email' = 'text';
	export let disabled = false;
	export let required = true;
	export let errors : any;
</script>

<div class="relative rounded-md shadow-sm w-full">
	<input
		{id}
		{type}
		{value}
		{disabled}
		{required}
		{placeholder}
		name={id}
		class="{errors
			? 'ring-red-300 text-red-900'
			: ''} px-2 block dark:bg-gray-700 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 place dark:ring-gray-500 holder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-50"
	/>
	{#if errors}
		<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
			<svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
	{/if}
</div>
{#if errors}
	{#each errors as error}
		<p class="mt-2 text-sm text-red-600" id="email-error">{error}</p>
	{/each}
{/if}
