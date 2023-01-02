<template>
    <HeroSection />
    <SeriesLogo :series="series" :error="error" :isLoading="isLoading" />
    <Feature :courses="featureCourse" :error="error" :isLoading="isLoading" />
    <Newsletter />
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import SeriesLogo from '../components/SeriesLogo.vue';
import Feature from '../components/Feature.vue';
import Newsletter from '../components/Newsletter.vue';
import axios from 'axios'
export default {
  name:'HomePage',
  components:{
      HeroSection,SeriesLogo,Feature,Newsletter
  },
  data() {
    return {
      featureCourse: [],
      series:[],
      isLoading: true,
      error:'',  
    }
  },
  mounted() {
    axios.get('https://laravel-courses.test/api/feature-courses').then((rs) => {
      this.featureCourse = rs.data.courses;
      this.series = rs.data.series;
      this.isLoading = false;
    }).catch((error) => {
      this.error = error;
      this.isLoading = false;
    });
   
  }
}
</script>