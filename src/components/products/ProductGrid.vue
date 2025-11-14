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
    <p v-if="isloading">loading ...</p>
    <p v-else-if="error"> Error {{ error }}</p>
    <div class="flex m-5 "  v-else>
    <div v-if="search.length > 0">
        <div class="flex m-5 "
        v-for="product in filtered_data" :key="product.id ">
            <ProductCard :product="product"></ProductCard>
            </div>
        </div>
    <div v-else class=" flex m-5 justify-center flex-wrap gap-4 md:gap-20">
        <div v-for="product in paginated_products" :key="product.id ">
            <ProductCard :product="product"></ProductCard></div>
        <div class="absolute bottom-0 left-200 flex">
            <ButtonComponent @click="prev_page">< Previous page </ButtonComponent>
            <p class="m-2 p-2 text-lg border-2 border-[#f5cb5c] font-bold drop-shadow-lg rounded">{{ current_page }}</p>
            <ButtonComponent @click="next_page"> Next page ></ButtonComponent>
        </div>
    </div>
    </div>
    
</template>