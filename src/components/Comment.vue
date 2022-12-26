<template>
    <li class="bg-white rounded-sm shadow">
        <div class="px-6 py-5">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center">
              <div class="flex items-center space-x-px">
                <ReviewStar />
              </div>
            </div>
            <p class="text-sm mt-2.5 sm:mt-0 font-normal text-gray-400">Dec 22, 2022</p>
          </div>
          <blockquote class="mt-4 sm:mt-6">
            <p class="text-base font-normal leading-7 text-gray-600">The best course for Laravel Developers!</p>
          </blockquote>
          <div class="flex items-center mt-5 sm:mt-8">
            <img class="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full" src="https://www.gravatar.com/avatar/f7bd4d2a91e6298ca47bff3a96121906.jpg?s=80&amp;d=blank&amp;r=g" alt="Alex Table Profile Photo">
            <span class="ml-2.5 text-sm font-medium text-gray-900"> Alex Table </span>
          </div>
        </div>
      </li>
</template>

<script>
import ReviewStar from './ReviewStar.vue';
export default{
    name:'Comment',
    components:{
        ReviewStar
    }
}
</script>