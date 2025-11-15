<script setup>
import { computed, onMounted, ref } from 'vue';
import {search} from '@/stores/search'
import ProductCard from './ProductCard.vue';
import ButtonComponent from '../common/ButtonComponent.vue';
const data = ref(null)
const isloading = ref(true)
const error = ref(null)
const prdoucts_per_page = 3
const current_page = ref(1)
const paginated_products = computed(()=>{
if(!data.value) return []
const start = (current_page.value - 1) * prdoucts_per_page
const end = start + prdoucts_per_page
return data.value.slice(start , end)
})
function prev_page(){
    if(current_page.value > 1) {
        current_page.value--
    }
}
function next_page(){
    if(current_page.value * prdoucts_per_page < data.value.length) {
        current_page.value++
    }
}
const filtered_data = computed(()=>
(data.value|| []).filter(p=>p.title.toLowerCase().includes(search.value.toLowerCase()))
)
onMounted(async()=>{
try{
    const res = await fetch('https://fakestoreapi.com/products')
    if(!res.ok) throw Error('Network Error')
    data.value = await res.json()
}catch (err){
    error.value = err.message
}finally {
    isloading.value = false 
}
})

</script>

<template>
    <p v-if="isloading"class="text-center text-lg md:text-xl p-4 md:p-8 text-white">loading ...</p>
    <p v-else-if="error" class="text-center text-lg md:text-xl p-4 md:p-8 text-red-500"> Error {{ error }}</p>
    <div class="p-4 md:p-6 lg:p-8 pb-45 md:pb-40"  v-else>
    <div v-if="search.length > 0">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        v-for="product in filtered_data" :key="product.id ">
            <ProductCard :product="product"></ProductCard>
            </div>
        </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <div v-for="product in paginated_products" :key="product.id ">
            <ProductCard :product="product"></ProductCard></div>

        <div class="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-[#242423]/90 p-3 md:p-4 rounded-lg border-2 border-[#f5cb5c] backdrop-blur-sm">
            <ButtonComponent class="w-full sm:w-auto text-sm md:text-base"
            @click="prev_page">< Previous </ButtonComponent>
            <p class="m-0 px-3 py-2 text-base md:text-lg border-2 border-[#f5cb5c] font-bold drop-shadow-lg rounded bg-[#242423] text-white whitespace-nowrap">{{ current_page }}</p>
            <ButtonComponent class="w-full sm:w-auto text-sm md:text-base"
             @click="next_page"> Next page ></ButtonComponent>
        </div>
    </div>
    </div>
    
</template>