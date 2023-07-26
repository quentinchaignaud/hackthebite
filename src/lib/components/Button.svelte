<script lang="ts">
    export let text = '';
    export let dangerous = false
    export let type : ('submit' | 'button') = 'submit'
    export let functionPassed = () => {}
</script>

<button
    on:click={functionPassed}
	type={type}
    class:bg-red-600={dangerous}
    class:hover:bg-red-500={dangerous}
	class={`w-full rounded-md bg-indigo-600 hover:bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-{color} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
	>{text}</button
>