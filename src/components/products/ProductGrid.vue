<script setup>
import { computed, onMounted, ref } from 'vue';
import {search} from '@/stores/search'
import { products , isloading , error , category , get_categories } from '@/stores/products';
import ProductCard from './ProductCard.vue';
import ButtonComponent from '../common/ButtonComponent.vue';
import DropDownComponent from '../common/DropDownComponent.vue';
const sortControl = ref('')
const categoryControl = ref('')
get_categories()
const data = computed(()=>{
if (!sortControl.value && !categoryControl.value) 
{return products.value}
else if (sortControl.value && categoryControl.value){
    if(sortControl.value === 'Rating'){return [...products.value].sort((b,a)=>a.rating.rate - b.rating.rate ).filter(p=>p.category === categoryControl.value)}
    if(sortControl.value === 'Price'){return [...products.value].sort((b,a)=>a.price - b.price ).filter(p=>p.category === categoryControl.value)}
}
else if (categoryControl.value){
    return [...products.value].filter(p=>p.category === categoryControl.value)
}
else if (sortControl.value) {
    if(sortControl.value === 'Rating'){return [...products.value].sort((b,a)=>a.rating.rate - b.rating.rate )}
    if(sortControl.value === 'Price'){return [...products.value].sort((b,a)=>a.price - b.price )}
}
})
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
function handleSorting(x) {
    if (x==='Default') {return sortControl.value = ''}
    sortControl.value = x
    
    }

function handleCategory(x){
    if (x==='Default') {return categoryControl.value = ''}
    categoryControl.value = x
}

</script>

<template>
    <!--Sorting and Categories-->
     <div class="absolute top-16 lg:top-18 left-1/2 -translate-x-1/2 w-full ">
            <div class="w-auto flex flex-row justify-center gap-2 sm:gap-2 md:gap-6 lg:gap-10">
            <DropDownComponent @control-clicked="handleSorting" 
            :controls="['Rating' , 'Price' , 'Default']">Sorting</DropDownComponent>
            <DropDownComponent @control-clicked="handleCategory" 
            :controls="[...category, 'Default']">Category</DropDownComponent>
            </div>
        </div>
    
    <p v-if="isloading"class="text-center text-lg md:text-xl p-4 md:p-8 text-white">loading ...</p>
    <p v-else-if="error" class="text-center text-lg md:text-xl p-4 md:p-8 text-red-500"> Error {{ error }}</p>
    
    <!--the product grid body-->
    <div class="p-4 md:p-6 lg:p-8 pb-40 md:pb-40 pt-24 md:pt-32 lg:pt-40 "  v-else>
    <div v-if="search.length > 0">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
        v-for="product in filtered_data" :key="product.id ">
            <ProductCard :product="product"></ProductCard>
            </div>
        </div>

    <div v-else class="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 lg:gap-50">
        <div v-for="product in paginated_products" :key="product.id ">
            <ProductCard :product="product"></ProductCard></div>
        <!-- Bottom control -->
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