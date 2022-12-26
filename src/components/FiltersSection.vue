<template>
    <form class="w-3/12 block bg-white p-4 px-6 shadow rounded-sm" method="GET">
        <h3 class="sr-only">Filters</h3>
        
        <Searchbox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
 
    </form>
</template>


<script>
import SearchBox from './SearchBox.vue';
import CheckBox from './CheckBox.vue';
export default {
    name:"FiltersSection",
    components:{
        SearchBox,CheckBox
    }
}
</script>