<template>
    <div>
        <h2 class="text-lg-primary-2 text-white">Course by Duration</h2>
        <ul class="mt-5">
          <li v-for="item in content" :key="item.id" class="mb-2">
            <router-link :to="{ name: 'archive', params: { archiveType: name, slug: item.slug } }" class="text-links text-gray-100 text-base before:text-gray-100">{{ item.name }}</router-link>
          </li>
        </ul>
    </div>
</template>

<script>
 export default{
  name: "FooterItem",
    props:['content','name']
 }
</script>