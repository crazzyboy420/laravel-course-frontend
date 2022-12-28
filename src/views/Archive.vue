<template>
    <section class="container mx-auto mt-[140px]">
        <SectionHeading heading="Topics: Authentication" />
        <div class="w-full grid grid-cols-3 single-feature gap-10 mx-auto">
          <ArchiveItem />
          <ArchiveItem />
          <ArchiveItem />
          <ArchiveItem />
          <ArchiveItem />
          <ArchiveItem />
          <ArchiveItem />
          <ArchiveItem />
          <ArchiveItem />
        </div>
        <div class="mt-5">
            <PaginateNav />
        </div>
      </section>
</template>



<script>
import ArchiveItem from '../components/FeatureItem.vue';
import PaginateNav from '../components/PaginateNav.vue';
import SectionHeading from '../components/SectionHeading.vue';
export default {
    name:"Archive",
    components:{
        ArchiveItem,PaginateNav,SectionHeading
    }
}
</script>