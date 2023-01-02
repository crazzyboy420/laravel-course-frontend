<template>
    <div class="container mx-auto">
        <ul v-if="!isLoading" class="flex items-center flex-nowrap justify-between gap-y-7 gap-3">
            <SeriesLogoItem v-for="item in series" :key="item.id" :series="item" />
        </ul>
        <loading-spinner v-else-if="isLoading" />
        <Error v-if="!!error" :error="error" />
    </div>
</template>

<script>
import Error from './Error.vue';
import LoadingSpinner from './LoadingSpinner.vue';
import SeriesLogoItem from './SeriesLogoItem.vue';
export default{
    name:'SeriesLogo',
    components:{
        SeriesLogoItem,
        LoadingSpinner,
        Error,
    },
    props:['series','isLoading','error']
}
</script>