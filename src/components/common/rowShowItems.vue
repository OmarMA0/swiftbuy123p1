<script setup>
import ProductCard from '../products/ProductCard.vue';
import { vAutoAnimate } from '@formkit/auto-animate';
import { computed, ref , onMounted , onUnmounted } from 'vue';
const props = defineProps(['products'])
const windowWidth = ref(window.innerWidth)
const itemsToShow = computed(()=>{
    if(windowWidth.value < 640) return 1
    else if (windowWidth.value >= 640 && windowWidth.value < 1024) return 2
    else return 3
})
const currentIndex = ref(0);
// Get the visible products
const visibleProducts = computed(() => {
    if (!props.products || props.products.length === 0) return [];
    const items = [];
    for (let i = 0; i < itemsToShow.value; i++) {
        const index = (currentIndex.value + i) % props.products.length;
        items.push(props.products[index]);
    }
    return items;
});

function nextSlide() {
    if (!props.products || props.products.length === 0) return;
    currentIndex.value = (currentIndex.value + 1) % props.products.length;
}

function handleResize() {
    windowWidth.value = window.innerWidth;
}

let interval;

onMounted(() => {
    // Start auto-play
    interval = setInterval(nextSlide, 3000);
    
    // Listen for window resize
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    clearInterval(interval);
    window.removeEventListener('resize', handleResize);
});

</script>

<template>
    <div v-auto-animate class="flex flex-row gap-4">
        <div v-for="product in visibleProducts" :key="product.id">
    <ProductCard :product="product"></ProductCard>
    
        </div>
    </div>
</template>