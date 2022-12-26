<template>
    <HeroSection />
    <SeriesLogo />
    <Feature />
    <Newsletter />
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import SeriesLogo from '../components/SeriesLogo.vue';
import Feature from '../components/Feature.vue';
import Newsletter from   '../components/Newsletter.vue';
export default {
    name:'HomePage',
    components:{
        HeroSection,SeriesLogo,Feature,Newsletter
    }
}
</script>