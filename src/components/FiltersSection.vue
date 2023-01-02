<template>
    <div class="w-3/12 block bg-white p-4 px-6 shadow rounded-sm" method="GET">
        <h3 class="sr-only">Filters</h3>
        
        <search-box @search="search" />
        <CheckBox :content="levels" @level="CheckBox"  text="Level" />
        <div class="border-b border-gray-200 py-6">
            <h3 class="-my-3 flow-root">
                <!-- Expand/collapse section button -->
                <button @click="open = ! open" type="button"
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-0" aria-expanded="false">
                    <span class="text-gray-900 font-bold">Price</span>
                    <span class="ml-6 flex items-center">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" x-show="open">
                            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" x-show="! open" style="display: none;">
                            <path
                                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z">
                            </path>
                        </svg>
                    </span>
                </button>
            </h3>
        
            <!-- Filter section, show/hide based on section state. -->
            <div v-show="open" class="pt-6">
                <div class="space-y-2">
                    <div class="flex items-center">
                        <input @change="priceFilter" v-model="priceType" name="price" id="filter-price-free" value="free" type="radio"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-price-free" class="ml-3 text-sm text-gray-600">
                            Free
                            <span class="text-xs text-gray-500">({{ freeCount }})</span>
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input @change="priceFilter" v-model="priceType" name="price" id="filter-price-onetime" value="paid" type="radio"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-price-onetime" class="ml-3 text-sm text-gray-600">
                            Paid 
                            <span class="text-xs text-gray-500">({{ paidCount }})</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-b border-gray-200 py-6">
            <h3 class="-my-3 flow-root">
                <!-- Expand/collapse section button -->
                <button @click="open2 = ! open2" type="button"
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-0" aria-expanded="false">
                    <span class="text-gray-900 font-bold">Duration</span>
                    <span class="ml-6 flex items-center">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" x-show="open">
                            <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" x-show="! open" style="display: none;">
                            <path
                                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z">
                            </path>
                        </svg>
                    </span>
                </button>
            </h3>
        
            <!-- Filter section, show/hide based on section state. -->
            <div v-show="open2" class="pt-6">
                <div class="space-y-2">
                    <div class="flex items-center">
                        <input id="filter-duration-1h-5h" name="duration" @change="durationFilter" v-model="duration" value="0" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-duration-1h-5h" class="ml-3 text-sm text-gray-600">
                            1-5 hours
                            <span class="text-xs text-gray-500">({{ oneToFive }})</span>
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="filter-duration-5h-10h" name="duration" @change="durationFilter" v-model="duration" value="1" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-duration-5h-10h" class="ml-3 text-sm text-gray-600">
                            5-10 hours
                            <span class="text-xs text-gray-500">({{ fiveToTen }})</span>
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="filter-duration-10h+" name="duration" @change="durationFilter" v-model="duration" value="2" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-duration-10h+" class="ml-3 text-sm text-gray-600">
                            10+ hours
                            <span class="text-xs text-gray-500">({{ tenPlus }})</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <CheckBox :content="platforms" @platform="CheckBox" text="Platform" /> 
        <CheckBox :content="series" @series="CheckBox" text="Series" />
 
    </div>
</template>


<script>
import axios from 'axios';

import CheckBox from './CheckBox.vue';
import SearchBox from './SearchBox.vue';
export default {
    name:"FiltersSection",
    components:{
        CheckBox,
        SearchBox
    },
    data() {
        return {
            platforms: [],
            series: [],
            levels: [],
            open: true,
            open2: true,
            priceType: '',
            paidCount: 0,
            freeCount: 0,
            oneToFive: 0,
            fiveToTen: 0,
            tenPlus: 0,
            duration:[],
        }
    },
    created() {
        this.$watch(
            () => this.$route.params.type,
            () => {
                this.getData(this.$route.params.type)
            },
           
            { immediate: true }
        )
        this.type = this.$route.params.type



    },
    methods: {
        getData(type) {
            axios.get('https://laravel-courses.test/api/filter-content', {
                params: {
                    type:type
                }
            }).then((rs) => {
                this.platforms = rs.data.platform;
                this.series = rs.data.series;
                this.levels = rs.data.levels;
                this.paidCount = rs.data.paid;
                this.freeCount = rs.data.free;
                this.oneToFive = rs.data.oneToFive;
                this.fiveToTen = rs.data.fiveToten;
                this.tenPlus = rs.data.tenPlus;
                this.isLoading = false
            }).catch((error) => {
                this.error = error,
                this.isLoading = false
            })
        },
        search(data) {
            this.$emit('search',{type:'search',value:data})
        },
        CheckBox(data) {
            this.$emit('checkBox', data);
        },
        priceFilter() {
            this.$emit('priceFilter', this.priceType);
        },
        durationFilter() {
            this.$emit('duration', { type: 'duration', value: this.duration });
        }
    
    },


}
</script>