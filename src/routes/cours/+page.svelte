<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
	<title>Cours</title>
	<link rel="canonical" href="https://quentinchaignaud.com/cours/" />
	<meta name="description" content="Liste de cours gratuits sur le backend et le system design." />
	<meta property="og:title" content="Cours" />
	<meta property="og:description" content="Liste de cours gratuits sur le backend et le system design." />
	<meta property="og:image" content="https://quentinchaignaud.com/cours/og-images/og-image.png" />
	<meta property="og:url" content="https://quentinchaignaud.com/cours/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@quentin__js" />
	<meta name="twitter:title" content="https://quentinchaignaud.com/cours/" />
	<meta name="twitter:description" content="Liste de cours gratuits sur le backend et le system design." />
	<meta name="twitter:image" content="https://quentinchaignaud.com/og-images/og-image.png" />
</svelte:head>

<div class="py-24 sm:py-32 min-h-screen">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Cours</h2>
        <p class="mt-2 text-base leading-8 text-gray-600 dark:text-gray-300">Tout les cours présents ici sont 100% gratuits. Ils se concentrent sur des concepts plutôt que des langages, pour que les juniors puissent obtenir cette vision d'ensemble qui leur fait souvent défaut.</p>
        <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
          <!-- {#each data.courses as course}
          <article class="p-2 relative isolate flex flex-col gap-8 lg:flex-row lg:hover:bg-gray-100 rounded-xl hover:cursor-pointer dark:lg:hover:bg-gray-800">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <img src={`https://api.quentinchaignaud.com/api/files/${course.collectionId}/${course.id}/${course.image}`} alt="Illustration d'un casier contenant des dossiers." class="absolute inset-0 h-full w-full rounded-2xl bg-white dark:bg-gray-700 object-contain lg:object-cover">
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div>
              <div class="group relative max-w-xl">
                <div class="lg:mt-3 flex flex-col-reverse md:flex-row md:items-center md:justify-between">
                    <h3 class="text-xl font-semibold leading-6 text-gray-900 dark:text-white">
                      <a href="/cours/{course.slug}">
                        <span class="absolute inset-0"></span>
                        {course.title}
                      </a>
                    </h3>
                    <span class="w-24 inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 mb-3 lg:mb-0 text-xs font-medium text-purple-800 dark:text-indigo-400 dark:bg-indigo-500/10 dark:ring-1 dark:ring-inset dark:ring-indigo-500/20">{course.statut}</span>
                </div>
                <div class="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {@html course.description}
                </div>
              </div>
            </div>
          </article>
          {/each} -->
        </div>
      </div>
    </div>
  </div>
  