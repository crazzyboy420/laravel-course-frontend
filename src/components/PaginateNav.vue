<template>
    <nav role="navigation" aria-label="Pagination Navigation" class="flex items-center justify-between">
        <div class="flex justify-between flex-1 sm:hidden">
          <span class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md"> « Previous </span>
          <a href="#" class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"> Next » </a>
        </div>
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-700 leading-5"> Showing <span class="font-medium">{{ pagination.from }}</span> to <span class="font-medium">{{ pagination.to }}</span> of <span class="font-medium">{{ pagination.total }}</span> results </p>
          </div>
          <div>
            <span class="relative z-0 inline-flex shadow-sm rounded-md">
              <button  v-for="(link,index) in pagination.links" @click="navigate(link.url)" :key="index"
                class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium border border-gray-300 leading-5 focus:z-10 focus:outline-none focus:ring transition ease-in-out duration-150"
                aria-label="Go to page 3" v-html="link.label" :class="[link.active ? 'bg-gray-500 text-white' :' text-gray-700 bg-white  hover:text-gray-500']" :disabled="link.active || !link.url"></button>
            </span>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: "PaginateNav",
  props: ['pagination'],
  methods: {
    navigate(link) {
      console.log(this.pagination)
      if (link) {
        const url = new URL(link);
        const pageNum = url.searchParams.get('page');
        this.$emit('navigate', pageNum);
      }
    }
  }
}
</script>