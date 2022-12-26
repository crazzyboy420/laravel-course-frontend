<template>
    <div class="mt-2 mb-4 space-y-3">
        <a :href="link" target="_blank" :class="`flex items-center justify-center w-full px-4 py-3 text-base font-bold text-center text-white transition-all duration-200 border-2 border-transparent rounded focus:outline-none hover:bg-white hover:text-black hover:border-b-2 ${classs}`"> {{ text }} &nbsp; <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
          </svg>
        </a>
    </div>
</template>


<script>
export default {
    name:'SingleCourseBtn',
    props:{
        link:String,
        text:String,
        classs:String
    }
}
</script>