<script setup>
import CartedCard from '@/components/products/CartedCard.vue';
import { carted_products } from '@/stores/carted_products';
import { RouterLink , useRouter } from 'vue-router';
import ButtonComponent from '@/components/common/ButtonComponent.vue';
import { computed } from 'vue';
const router = useRouter()
const Carted_sum = computed(()=>{
    let sum = 0
    if (carted_products.value){
    for (const cproduct of carted_products.value){
        sum = cproduct.amount * cproduct.price + sum
        
    }}
    return sum
})
function checkout(){
    if (carted_products){
    carted_products.value = []
    router.push('/Delivery')
    }
}

</script>

<template>
    <div class="text-white flex flex-wrap gap-4 md:gap-40 bg-cover bg-center"> 
    <div v-for="product in carted_products" class="flex-wrap">
        <CartedCard :product="product" ></CartedCard>
        </div>
    <div class="absolute bottom-0 right-0 border-4 
    rounded-xl p-5 m-2 w-100 justify-end h-40 bg-[#242423] border-[#f5cb5c] shadow-lg flex flex-col gap-3">
        <p class="m-2 p-2 text-lg border-2 border-[#f5cb5c] justify-center font-bold d"> Total price = 
            {{ parseFloat(Carted_sum.toFixed(1)) }}</p> <!-- to get only the first decimal in the float -->
        <div class="flex w-auto h-auto gap-5">
            <ButtonComponent class="grow" @click="checkout">Check out</ButtonComponent>
            <ButtonComponent class="grow"><RouterLink to="/Shopping">continue shopping</RouterLink></ButtonComponent>
        </div>
    </div>
    </div>
</template>