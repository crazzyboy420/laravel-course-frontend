<template>
    <div>
        <form action="" class="mt-20">
            <div class="w-full relative max-w-[860px] mx-auto px-5 pb-[138px] pt-24">
                <div class="w-full mx-auto flex flex-col items-center justify-center">
                  <h1 class="text-center w-full mx-auto heading-primary mb-3"> The best Courses and Books on the <span class="text-orange">Laravel</span> ecosystem </h1>
                  <p class="text-secoundery-color w-full text-lg text-center my-4 mb-10"> Find the right books and courses on the Laravel framework and related topics to suite your level of expertise. Know how good a course is through your peers review and share your own too. </p>

                  <!--Search Form-->
                  <div class="flex w-[700px] gap-x-6">
                    <input type="search" name="keyword" placeholder="Enter keywords to search courses" class="w-4/5 bg-white h-12 border input-focus border-orange rounded-lg px-3.5 outline-none" required>
                    <button type="submit" class="btn-primary w-1/5 text-white"> Search </button>
                  </div>
                </div>
                <!--hero icon-->
                <img src="https://laravel-courses.com/img/left-top-angle.png" alt="angle" class="absolute pointer-events-none top-[150px] -left-28">
                <img src="https://laravel-courses.com/img/left-bottom-angle.png" alt="angle" class="absolute  pointer-events-none top-[370px] -left-12">
                <img src="https://laravel-courses.com/img/right-angle.png" alt="angle" class="absolute pointer-events-none top-[70px] -right-6">
                <img src="https://laravel-courses.com/img/right-bottom-angle.png" alt="angle" class="absolute   pointer-events-none top-[360px] -right-24">
          </div>
        </form>
        <img src="https://laravel-courses.com/img/right-center-angle.png" alt="angle" class="w-auto h-auto object-contain absolute top-1/2 -translate-y-1/2 right-10 pointer-events-none">
    </div>
</template>


<script>
export default{
    name:"HeroSection"
}
</script>