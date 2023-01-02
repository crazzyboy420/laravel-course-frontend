<template>
    <div class="border-b border-gray-200 py-6">
        <h3 class="-my-3 flow-root">
          <!-- Expand/collapse section button -->
          <button @click="isShow = !isShow" type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
            <span class="text-gray-900 font-bold">{{ text }}</span>
            <span class="ml-6 flex items-center">
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
              </svg>
              <svg class="h-5 w-5 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
              </svg>
            </span>
          </button>
        </h3>
        <!-- Filter section-->
        <div v-show="isShow" class="pt-6">
          <div class="space-y-2">
            <div v-for="item in content" :key="item.id" class="flex items-center">
              <input @change="filter" :id="`filter-level-${item.id}`" v-model="value" :value="item.id" :name="text" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
              <label :for="`filter-level-${item.id}`" class="ml-3 text-sm text-gray-600">{{ item.name }}<span class="text-xs text-gray-500">({{ item.courses.length }})</span>
              </label>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CheckBox',
  data() {
    return {
      isShow: true,
      value:[],
    }
  },
  props: ['content', 'text'],
  methods: {
    filter() {

      if (this.text == 'Level') {
        this.$emit('level', { type: this.text, value: this.value });
      } else if (this.text == 'Platform') {
        this.$emit('platform', { type: this.text, value: this.value });
      } else if (this.text == 'Topic') {
        this.$emit('topic', { type: this.text, value: this.value });
      } else if (this.text == 'Series') {
        this.$emit('series', { type: this.text, value: this.value });
      }
    }
  },
  
}
</script>