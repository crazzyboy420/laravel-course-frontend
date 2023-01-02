<template>
    <li class="bg-white rounded-sm shadow">
        <div class="px-6 py-5">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center">
              <div class="flex items-center space-x-px">
                <ReviewStar :star="review.star" />
              </div>
            </div>
            <p class="text-sm mt-2.5 sm:mt-0 font-normal text-gray-400">{{ time }}</p>
          </div>
          <blockquote class="mt-4 sm:mt-6">
            <p class="text-base font-normal leading-7 text-gray-600">{{ review.comment }}</p>
          </blockquote>
          <div class="flex items-center mt-5 sm:mt-8">
            <vue-gravatar class="flex-shrink-0 w-6 h-6 bg-gray-300 rounded-full" :email="review.author.email" />
            <span class="ml-2.5 text-sm font-medium text-gray-900"> {{ review.author.name }} </span>
          </div>
        </div>
      </li>
</template>

<script>
import ReviewStar from './ReviewStar.vue';
import moment from 'moment';
export default{
  name: 'Comment',
  data() {
    return {
      time: moment(String(this.review.created_at)).format('LLL'),
      }
    },
    components:{
        ReviewStar
    },
  props:['review']
}
</script>