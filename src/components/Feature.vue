<template>
    <section class="container mx-auto mt-[140px]">
        <SectionHeading heading="Featured Courses" />
        <div v-if="!isLoading" class="w-full grid grid-cols-3 single-feature gap-10 mx-auto">
          <FeatureItem v-for="course in courses" :key="course.id" :course="course" />
        </div>
        <LoadingSpinner v-else-if="isLoading" />
        <Error v-if="!!error" :error="error" />
        <div class="flex justify-center mt-12 mb-12">
          <router-link :to="{ name: 'courses', params: { type:'courses'} }">
            <button class="btn-primary text-white h-14 w-32"> Browse all </button>
          </router-link>
        </div>
      </section>
</template>

<script>
import SectionHeading from './SectionHeading.vue';
import FeatureItem from './FeatureItem.vue'
import LoadingSpinner from './LoadingSpinner.vue';
import Error from './Error.vue';
 export default{
    name:"Feature",
    components:{
      SectionHeading, FeatureItem, LoadingSpinner,
        Error
  },
  mounted() {
    console.log(this.courses)
  },
    props:['courses','error','isLoading'],
 }
</script>