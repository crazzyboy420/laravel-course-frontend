<template>
    <li class="w-full lg:max-w-[165px]">
        <router-link :to="{ name: 'archive', params: { archiveType: 'series', slug: series.slug } }" class="bg-white border mx-auto border-orange box-shadow w-full h-12 md:h-16 rounded-lg flex items-center justify-center">
          <img :src="series.url" alt="Laravel" class="w-20 md:w-auto max-h-12 h-auto object-contain">
        </router-link>
    </li>
</template>


<script>
export default{
  name: 'SeriesLogoItem',
  props:['series']
}
</script>