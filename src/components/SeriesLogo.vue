<template>
    <div class="container mx-auto">
        <ul class="flex items-center flex-nowrap justify-between gap-y-7 gap-3">
            <SeriesLogoItem />
            <SeriesLogoItem />
            <SeriesLogoItem />
            <SeriesLogoItem />
            <SeriesLogoItem />
            <SeriesLogoItem />
        </ul>
    </div>
</template>

<script>
import SeriesLogoItem from './SeriesLogoItem.vue';
export default{
    name:'SeriesLogo',
    components:{
        SeriesLogoItem
    }
}
</script>