<template>
    <div class="mt-1 bg-gray">
        <div class="mx-auto container">
          <CoursesTitle />
          <div class="pt-6 pb-12">
            <div class="flex gap-x-8 gap-y-10">
              <!-- Filters -->
              <FiltersSection @search="filter" @checkBox="filter" @priceFilter="filter" @duration="filter" />
              <div class="w-9/12">
                <ul v-if="!isLoading" role="list" class="space-y-6">
                  <CoursesItem v-for="course in allCourses" :key="course.id" :course="course" :type="type" />
                </ul>
                <LoadingSpinner v-else-if="isLoading" />
                <Error v-if="!!error" :error="error" />
                <div class="mt-5">
                  <PaginateNav @navigate="navigate" :pagination="pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>


<script>
import CoursesTitle from '../components/CoursesTitle.vue';
import FiltersSection from '../components/FiltersSection.vue';
import CoursesItem    from '../components/CoursesItem.vue';
import PaginateNav from '../components/PaginateNav.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import Error from '../components/Error.vue';
import axios from 'axios';
export default {
    name:'CoursesPage',
    components:{
      CoursesTitle, FiltersSection, CoursesItem, PaginateNav, LoadingSpinner, Error
  },
  data() {
    return {
      allCourses: [],
      isLoading: true,
      error: '',
      type: '',
      pagination: [],
      page: 1,
      search: '',
      level: [],
      platform: [],
      series: [],
      price: '',
      duration:[],
      }
  },
  created() {
    this.$watch(
      () => this.$route.params.type,
      () => {
        this.getCourse(this.$route.params.type,this.page)
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
    this.type = this.$route.params.type

  },
  methods: {
    getCourse(type, page) {
      this.isLoading = true;
      axios.get(`https://laravel-courses.test/api/courses/${type}`, {
        params: {
          search: this.search,
          level: this.level,
          platform: this.platform,
          series: this.series,
          price: this.price,
          page,
          duration:this.duration,
        }
      }).then((rs) => {
        this.allCourses = rs.data.data;
        this.pagination = rs.data;
        this.isLoading = false
       
      }).catch((error) => {
        this.error = error;
        this.isLoading = false
      });
    },
    navigate(page) {
      this.page = page;
      this.getCourse(this.type,page)
    },
    filter(data) {
      if (data.type == 'search') {
        this.search = data.value
      }
      if (data.type == 'Level') {
        this.level = data.value;
      }
      if (data.type == 'Platform') {
        this.platform = data.value;
      }
      if (data.type == 'Series') {
        this.series = data.value;
      }

      if (data == 'free' || data == 'paid') {
        this.price = data
      }

      if (data.type == 'duration') {
        this.duration = data.value;
      }
      this.getCourse(this.$route.params.type, this.page) 
    }
  },
}
</script>