<script setup>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import { onMounted } from 'vue'
import Banner from '@/components/app/home/Banner.vue'
import Categories from '@/components/app/home/Categories.vue'
import TopPicks from '@/components/app/home/TopPicks.vue'

onMounted(() => {
    new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        spaceBetween: 32,
        autoplay: {
            delay: 3000,
        },
        slidesOffsetBefore: 32,
        slidesOffsetAfter: 32,
        slidesPerView: 'auto',
    });
})
</script>

<template>
    <Banner />
    <main class="flex flex-col gap-[100px] w-full max-w-[1280px] px-[52px] mt-[72px] mb-[100px] mx-auto">
        <Categories />
        <TopPicks />
    </main>
</template>