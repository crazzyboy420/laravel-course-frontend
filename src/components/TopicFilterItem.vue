<template>
    <a :href="link" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-1.5 hover:bg-gray-100">
        <div class="absolute flex flex-shrink-0 items-center justify-center">
          <span class="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true"></span>
        </div>
        <div class="ml-3.5 text-sm font-medium text-gray-900">{{ text }}</div>
    </a>
</template>


<script>
export default {
    name:'TopicFilterItem',
    props:{
        link:String,
        text:String
    }
}
</script>