<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
  </script>

<svelte:head>
	<title>{data.course.items[0].title}</title>
	<link rel="canonical" href={`https://quentinchaignaud.com/cours/${data.course.items[0].slug}`} />
	<meta name="description" content={`${data.course.items[0].description_seo}`} />
	<meta property="og:title" content={data.course.items[0].title} />
	<meta property="og:description" content={`${data.course.items[0].description_seo}`} />
	<meta property="og:image" content={`https://api.quentinchaignaud.com/api/files/${data.course.items[0].collectionId}/${data.course.items[0].id}/${data.course.items[0].image_seo}`} />
	<meta property="og:url" content={`https://quentinchaignaud.com/cours/${data.course.items[0].slug}`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@quentin__js" />
	<meta name="twitter:title" content={data.course.items[0].title} />
	<meta name="twitter:description" content={`${data.course.items[0].description_seo}`} />
	<meta name="twitter:image" content={`https://api.quentinchaignaud.com/api/files/${data.course.items[0].collectionId}/${data.course.items[0].id}/${data.course.items[0].image_seo}`} />
</svelte:head>

<section>
    <div class="py-24 px-6 sm:py-32 lg:px-8 min-h-screen">
        <div class="mx-auto max-w-2xl text-center">
            <p class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">{data.course.items[0].subtitle}</p>
            <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">{data.course.items[0].title}</h2>
            <p class="mt-8 leading-8 text-gray-600 dark:text-gray-300 text-center">
				{@html data.course.items[0].content}
            </p>
			<!-- <a class="text-white" href="/cours/{data.course.items[0].slug}/{data.course.items[0].expand.lessons[0].slug}/">Introduction</a> -->
        </div>
      </div>
</section>