<template>
    <li>
        <a :href="link" class="text-gray-400 hover:text-gray-500" target="_blank">
          <slot></slot>
        </a>
    </li>
</template>


<script>
export default {
    name:'SoicalLink',
    props:{
        link:String,
    }
}
</script>