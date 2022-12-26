<template>
    <div class="overflow-hidden bg-white border border-gray-200 rounded-sm mt-6 shadow-sm">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-sm font-bold tracking-widest text-gray-900 uppercase">Topics</h3>
          <hr class="mt-5 border-gray-200">
          <div class="mt-8 flex flex-wrap gap-2.5">
            <TopicFilterItem link="#" text="Authontication" />
            <TopicFilterItem link="#" text="Laravel" />
            <TopicFilterItem link="#" text="TDD" />
          </div>
        </div>
    </div>
</template>


<script>
import TopicFilterItem from './TopicFilterItem.vue';
export default {
    name:'TopicFilter',
    components:{
        TopicFilterItem
    }
}
</script>