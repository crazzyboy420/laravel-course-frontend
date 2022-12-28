<template>
    <section class="container mx-auto mt-[140px]">
        <SectionHeading heading="Featured Courses" />
        <div class="w-full grid grid-cols-3 single-feature gap-10 mx-auto">
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
        </div>
        <div class="flex justify-center mt-12 mb-12">
          <router-link to="/archive">
            <button class="btn-primary text-white h-14 w-32"> Browse all </button>
          </router-link>
        </div>
      </section>
</template>

<script>
import SectionHeading from './SectionHeading.vue';
import FeatureItem from './FeatureItem.vue'
 export default{
    name:"Feature",
    components:{
        SectionHeading,FeatureItem
    }
 }
</script>