<template>
    <div class="overflow-hidden bg-white border border-gray-200 rounded-sm shadow-sm">
        <div class="space-y-4 p-6">
          <h3 class="text-sm font-bold tracking-widest text-gray-900 uppercase">Authors</h3>
          <hr class="mt-5 mb-5 border-gray-200">
          <AuthorItem />
          <AuthorItem />
        </div>
    </div>
</template>

<script>
import AuthorItem from './AuthorItem.vue';
export default {
    name:'AuthorSection',
    components:{
        AuthorItem
    }
}
</script>