<script setup>
import { useProductCategoryStore } from '@/stores/productCategory';
import { useProductStore } from '@/stores/product';
import ProductCard from '@/components/card/ProductCard.vue';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const productCategory = ref({})

const productCategoryStore = useProductCategoryStore()
const { loading } = storeToRefs(productCategoryStore)
const { fetchProductCategoryBySlug } = productCategoryStore

const productStore = useProductStore()
const { products, loading: loadingProduct } = storeToRefs(productStore)
const { fetchProducts } = productStore

const fetchProductCategory = async () => {
    const response = await fetchProductCategoryBySlug(route.params.slug)

    productCategory.value = response
}

onMounted(async () => {
    await fetchProductCategory()

    fetchProducts({
        product_category_id: productCategory.value.id,
        limit: 8,
        random: true,
    })
})
</script>

<template>
    <header class="w-full max-w-[1920px] mx-auto overflow-hidden bg-custom-background p-[52px]">
            <div class="flex flex-col w-full max-w-[1280px] px-[52px] gap-3 mx-auto">
                <div class="flex items-center gap-3">
                    <a href="main.html" class="font-medium text-lg text-custom-grey last:font-semibold last:text-custom-blue">
                        Homepage
                    </a>
                    <span class="font-medium text-xl text-custom-grey">/</span>
                    <a href="#" class="font-medium text-lg text-custom-grey last:font-semibold last:text-custom-blue">
                        {{ productCategory?.name }}
                    </a>
                </div>
                <h1 class="font-extrabold text-[32px] capitalize">Explore based on Gadget Category</h1>
                <div class="flex items-center gap-4">
                    <div class="group flex items-center gap-2">
                        <img src="@/assets/images/icons/box-grey.svg" class="flex size-5 shrink-0" alt="icon">
                        <span class="font-semibold text-custom-grey">{{ productCategory?.product_count }} Products</span>
                    </div>
                    <div class="group flex items-center gap-2">
                        <img src="@/assets/images/icons/verify-star-grey.svg" class="flex size-5 shrink-0" alt="icon">
                        <span class="font-semibold text-custom-grey">Authenticity Guaranteed</span>
                    </div>
                </div>
            </div>
        </header>
        <main class="flex flex-col gap-[100px] w-full max-w-[1280px] px-[52px] mt-[72px] mb-[100px] mx-auto">
            <section id="Popular" class="flex flex-col gap-9">
                <div class="flex items-center justify-between">
                    <h2 class="font-extrabold text-[32px]">Sedang Popular 🔥 </h2>
                </div>
                <div class="grid grid-cols-4 gap-6">
                    <ProductCard v-for="product in products" :key="product.id" :item="product" v-if="!loading" />
                </div>
                <button class="flex items-center w-fit h-14 rounded-[18px] py-4 px-6 gap-[10px] bg-custom-black mx-auto">
                    <span class="font-medium text-white">Load More</span>
                    <img src="@/assets/images/icons/arrow-down-white.svg" class="flex size-6 shrink-0" alt="icon">
                </button>
            </section>
            <section id="Just-Released" class="flex flex-col gap-9">
                <div class="flex items-center justify-between">
                    <h2 class="font-extrabold text-[32px]">Just Released 🙌🏻 </h2>
                </div>
                <div class="grid grid-cols-4 gap-6">
                    <ProductCard v-for="product in products" :key="product.id" :item="product" v-if="!loading" />
                </div>
                <button class="flex items-center w-fit h-14 rounded-[18px] py-4 px-6 gap-[10px] bg-custom-black mx-auto">
                    <span class="font-medium text-white">Load More</span>
                    <img src="@/assets/images/icons/arrow-down-white.svg" class="flex size-6 shrink-0" alt="icon">
                </button>
            </section>
        </main>
</template>