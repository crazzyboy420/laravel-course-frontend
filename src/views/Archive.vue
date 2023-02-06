<template>
    <section class="container mx-auto mt-[140px]">
        <SectionHeading :heading="`${type[0].toUpperCase() + type.slice(1)}: ${item.name}`" />
        <div v-if="!isLoading" class="w-full grid grid-cols-3 single-feature gap-10 mx-auto">
          <ArchiveItem v-for="course in courses.data" :key="course.id" :course="course" />
        </div>
        <loading-spinner v-if="isLoading" />
        <Error v-if="!!error" :error="error" />
        <div class="mt-5">
            <PaginateNav  @navigate="navigate" :pagination="courses" />
        </div>
      </section>
</template>



<script>
import axios from 'axios';
import ArchiveItem from '../components/FeatureItem.vue';
import PaginateNav from '../components/PaginateNav.vue';
import SectionHeading from '../components/SectionHeading.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import Error from '../components/Error.vue';
export default {
    name:"Archive",
    components:{
        ArchiveItem,PaginateNav,SectionHeading,
        LoadingSpinner, Error
    },
    data() {
        return {
            courses: [],
            isLoading: true,
            error: '',
            type: '',
            item: {},
            pagination: [],
            page:1,
        }
    },
    created() {
        this.$watch(
            () => this.$route.params.slug,
            () => {
                this.fatchData(this.$route.params.archiveType, this.$route.params.slug,this.page);
                this.type = this.$route.params.archiveType;
            },
            // fetch the data when the view is created and the data is
            // already being observed
            { immediate: true }
        )
    },
    methods: {
        fatchData(type, slug,page) {
            this.isLoading = true;
            axios.get(`https://laravel-courses.test/api/archive/${type}/${slug}`, {
                params: {
                    page
                }
            }).then((rs) => {
                this.courses = rs.data.courses;
                this.item = rs.data.item;
                this.isLoading = false;
            }).catch((error) => {
                this.error = error;
                this.isLoading = false;
            })
        },
        navigate(page) {
            this.page = page;
            this.fatchData(this.type, this.$route.params.slug,page)
        }
    }
}
</script>