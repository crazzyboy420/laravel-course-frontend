<template>
    <div class="flex items-baseline justify-between pt-10">
        <h1 class="text-lg font-bold tracking-tight text-gray-900">All Courses</h1>
        <div class="flex items-center">
          <div class="relative inline-block text-left">
            <select name="sort" id="cars" class="focus-visible:outline-none py-1 px-2 shadow" form="carform">
              <option>Sort</option>
              <option value="Recently Added">Recently Added</option>
              <option value="Most Popular">Most Popular</option>
              <option value="Best Rating">Best Rating</option>
              <option value="Recently Updated">Recently Updated</option>
            </select>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CoursesTitle'
}
</script>