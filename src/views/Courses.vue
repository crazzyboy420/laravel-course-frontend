<template>
    <div class="mt-1 bg-gray">
        <div class="mx-auto container">
          <CoursesTitle />
          <div class="pt-6 pb-12">
            <div class="flex gap-x-8 gap-y-10">
              <!-- Filters -->
              <FiltersSection />
              <div class="w-9/12">
                <ul role="list" class="space-y-6">
                  <CoursesItem />
                  <CoursesItem />
                  <CoursesItem />
                  <CoursesItem />
                  <CoursesItem />
                  <CoursesItem />
                  <CoursesItem />
                  <CoursesItem />
                </ul>
                <div class="mt-5">
                  <PaginateNav />
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
export default {
    name:'CoursesPage',
    components:{
        CoursesTitle,FiltersSection,CoursesItem,PaginateNav
     }
    
}
</script>