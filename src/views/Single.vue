<template>
    <div v-if="!isLoading" class="bg-gray mt-1 py-6">
        <div class="container mx-auto">
          
          <Breadcrumb :type="courseType" />

          <!--Single Page Content-->
          <div class="flex mt-8">


              <div class="mt-2 w-2/3 border-gray-100 border-r pr-10 pb-0 border-b-0">
                <div class="flex">
                  <h1 class="text-3xl font-bold text-gray-900"> {{ course.title }} </h1>
                </div>

                <!--Review Section-->
                <div class="flex items-center gap-3 mt-5">
                    <ReviewStar :star="avarageStar"/>

                    <a href="#reviews" class="text-sm text-gray-500"> {{ !!course.reviews ? course.reviews.length : 0 }} Reviews </a>
                  </div>


                <!--Course About-->
                <ul class="flex flex-wrap items-center gap-4 mt-5 text-gray-700">
                  <li class="flex items-center gap-2">
                    <svg class="w-6 h-6 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{{ course.duration == 0 ? '1-5 hours' : course.duration == 1 ? '5-10 hours' : '10+ hours' }}</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-6 h-6 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"></path>
                    </svg>
                    <span v-if="!!course.level">{{ course.level.name }}</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-6 h-6 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{{ course.price <1 ? "Free" : ` $${course.price}.00` }}</span>
                  </li>
                </ul>


                <!--Feature image & description-->
                <div class="rounded-sm mt-8 shadow-sm">
                  <img class="w-full" :src="course.image_url" :alt="course.title">
                  <div class="py-6">
                    <div class="text-base space-y-6 font-normal text-gray-700 line-clamp-20">
                      <p>{{ course.description }}</p>
                    </div>
                  </div>
                </div>

                <h2 class="mt-4 pt-4 text-lg font-bold text-gray-900">Reviews</h2>
                <ul class="space-y-6 mt-4">
                    <Comment v-for="review in course.reviews" :key="review.id" :review="review" />
                </ul>
              </div>


              <div class="w-1/3 pl-10 pt-0">
                <SingleCourseBtn :link="course.link" classs="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-red-500 hover:border-red-500" text="Get The Course" />
                <SingleCourseBtn link="#" classs="hover:text-black hover:border-b-2 hover:border-black bg-gray-900" text="Write A Review" />

                <AuthorSection :authors="course.authors" />
                <TopicFilter :topics="course.topics" />
              </div>

            </div>
        </div>
    </div>
    <loading-spinner class="container mx-auto" v-if="isLoading" />
    <Error :error="error" v-if="!!error" />
</template>

<script>

  import Breadcrumb from '../components/Breadcrumb.vue';
  import ReviewStar from '../components/ReviewStar.vue';
  import Comment    from '../components/Comment.vue';
  import SingleCourseBtn from '../components/SingleCourseBtn.vue';
  import AuthorSection from '../components/AuthorSection.vue';
  import TopicFilter from '../components/TopicFilter.vue';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import Error from '../components/Error.vue';
  export default{
    name: "SinglePage",
    components:{
    Breadcrumb,
    ReviewStar,
    Comment,
    SingleCourseBtn,
    AuthorSection,
    TopicFilter,
    LoadingSpinner,
    Error
},
  data() {
    return {
      course: {},
      isLoading: true,
      error: '',
      avarageStar:0
    }
  },
  props: ['courseType','slug'],
  beforeMount() {
    this.getSingle(this.slug)
  },

  methods: {
    getSingle(slug) {
      this.isLoading = false
      axios.get(`https://laravel-courses.test/api/single?slug=${slug}`).then((rs) => {
        this.course = rs.data;
        this.isLoading = false;

        if (Array.isArray(rs.data.reviews)) {
          let totalStar = rs.data.reviews.reduce((prev, current) => {
            return prev + current.star;
          }, 0);

          this.avarageStar = Math.round(totalStar / rs.data.reviews.length);
         }
  
      }).catch((error)=>{
        this.error = error;
        this.isLoading = false;
      })
    }
  }
  }
</script>