<template>
    <div>
        <h2 class="text-lg-primary-2 text-white">Course by Duration</h2>
        <ul class="mt-5">
          <li class="mb-2">
            <router-link to="/archive" class="text-links text-gray-100 text-base before:text-gray-100">1-5 hours</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/archive" class="text-links text-gray-100 text-base before:text-gray-100">5-10 hours</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/archive" class="text-links text-gray-100 text-base before:text-gray-100">10+ hours</router-link>
          </li>
        </ul>
    </div>
</template>

<script>
 export default{
    name:"FooterItem"
 }
</script>