<script lang="ts">
	import '../app.css';
	import { Navbar, Footer } from '$lib/components';
	import DarkMode from 'svelte-dark-mode';
	import { afterUpdate } from 'svelte';
	import { Toaster } from 'svelte-french-toast'

	let theme: any;
	let switchTheme: string; 
	let dark: boolean;

	if (typeof window !== 'undefined') {
		theme = localStorage.getItem('custom-theme-key');
	}

	afterUpdate(() => {
		document.body.className = theme;
		switchTheme = theme === 'dark' ? 'light' : 'dark';
	});

	let handleThemeChange = () => {
		theme = switchTheme;
		document.documentElement.setAttribute('data-theme', theme);
	};

	export let data;
</script>

<Toaster />

<DarkMode bind:theme key="custom-theme-key" />

<main class:dark class="dark:bg-gray-900 transition-colors">
	<Navbar on:click={handleThemeChange} currentTheme={theme} currentUser={data.user} />
	<slot />
	<Footer />
</main>
