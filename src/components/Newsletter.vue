<template>
    <div class="w-full bg-update bg-no-repeat bg-cover h-[400px] py-0">
        <div class="container mx-auto px-8 w-full flex flex-row justify-between items-center gap-5 h-full">
            <div class="max-w-[579px] w-full">
            <h2 class="heading-secondary"> Do not miss any updates </h2>
            <p class="mt-3.5 text-base-primary"> We will be covering course reviews, comparison between the best courses, and will be sharing exclusive discounts with you on a monthly basis. </p>
            <div class="mt-6 md:mt-12 w-full flex flex-col sm:flex-row items-center gap-5">
                <input wire:model="email" type="email" placeholder="Your email address" class="md:max-w-[385px] input-focus w-full h-14 bg-white border border-orange rounded-lg px-3.5 text-base-primary text-[#262626] placeholder:text-current outline-none">
                <button wire:click="subscribe" class="bg-white w-full sm:w-[135px] shrink-0 h-14 rounded-lg flex justify-center items-center border border-orange text-lg-primary font-medium text-orange-100 bg-button-hover hover:text-white transition-all duration-300"> Subscribe </button>
            </div>
            </div>
            <div class="justify-center">
            <img src="https://laravel-courses.com/img/letter.png" alt="letter" class="w-auto h-auto object-contain">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Newsletter"
}
</script>