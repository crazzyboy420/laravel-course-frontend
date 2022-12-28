<template>
    <nav class="flex mt-0">
        <ol role="list" class="flex items-center space-x-0.5">
          <li>
            <div class="-m-1">
              <router-link :to="{ name: 'home' }" class="p-1 ml-0.5 text-base font-medium text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700">Home</router-link>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="flex-shrink-0 w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
              </svg>
              <div class="-m-1">
              <router-link :to="{ name: 'courses' }" class="p-1 ml-0.5 text-base font-medium text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700">Courses</router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="flex-shrink-0 w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
              </svg>
              <div class="-m-1">
                 <router-link :to="{ name: 'single-course' }" class="p-1 ml-0.5 text-base font-medium text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700">Laravel Core Adventures</router-link>
              </div>
            </div>
          </li>
        </ol>
    </nav>
</template>


<script>
export default {
    name:"Breadcrumb"
    
}
</script>