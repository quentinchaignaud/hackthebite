<script lang="ts">
	import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';

  export let username : any;

  let showMenu = false;
  let menuDOM: HTMLElement | null = null;

  onMount(() => {
      const handleOutsideClick = (event: any) => {
        if (showMenu && menuDOM && !menuDOM.contains(event.target as Node)) {
          showMenu = false;
        }
      };
  
      document.addEventListener('click', handleOutsideClick, false);
  
      return () => {
        document.removeEventListener('click', handleOutsideClick, false);
      };
    });
</script>

<div bind:this={menuDOM}  class="inline-flex rounded-md shadow-sm">
    <button on:click={() => showMenu = !showMenu} type="button" class="relative inline-flex items-center rounded-l-md bg-white dark:bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 focus:z-10 dark:text-white dark:border-gray-600">{username.username}</button>
    <div class="relative -ml-px block">
      <button on:click={() => showMenu = !showMenu} type="button" class="relative inline-flex items-center rounded-r-md bg-white dark:bg-gray-900 px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 dark:ring-gray-600" id="option-menu-button" aria-expanded="true" aria-haspopup="true">
        <span class="sr-only">Open options</span>
        <svg class="{showMenu ? 'rotate-180' : ''} transition h-5 w-5 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
      {#if showMenu}
      <div 
        in:scale={{ duration: 100, start: 0.95 }}
        out:scale={{ duration: 100, start: 0.95 }} 
        class="absolute right-0 z-10 -mr-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800" role="menu" aria-orientation="vertical" aria-labelledby="option-menu-button" >
        <div class="py-1 ">
          <a on:click={() => showMenu = !showMenu} href="/compte" type="button" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700" role="menuitem" id="option-menu-item-0">Compte</a>
  
          <a on:click={() => showMenu = !showMenu} href="/cours" type="button" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700" role="menuitem" id="option-menu-item-1">Cours</a>
          
          <form action="/auth/deconnexion" method="POST">
            <button type="submit" class="text-left text-red-600 w-full block px-4 py-2 text-sm hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-700 cursor-pointer" role="menuitem" id="option-menu-item-2">Se déconnecter</button>
          </form>
        </div>
      </div>
      {/if}
    </div>
  </div>