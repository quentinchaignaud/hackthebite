import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
  const res = await fetch('https://api.quentinchaignaud.com/api/collections/courses/records?expand=lessons');
  const data = await res.json();   
  return { 
    course: data
  };
}) satisfies PageLoad;