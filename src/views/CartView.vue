<script setup>
import CartedCard from '@/components/products/CartedCard.vue';
import { carted_products } from '@/stores/carted_products';
import { RouterLink , useRouter } from 'vue-router';
import ButtonComponent from '@/components/common/ButtonComponent.vue';
import { computed } from 'vue';
import { username } from '@/stores/user';
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
    <div class="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 lg:gap-15"> 
    <div v-for="product in carted_products" class="p-4 md:p-6 lg:p-8 pb-44 lg:pb-50">
        <CartedCard :product="product" ></CartedCard>
        </div>
        <!--this is the bottom control component-->
    <div class="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-[#242423]/90 
    p-3 md:p-4 rounded-lg border-2 border-[#f5cb5c] backdrop-blur-sm ">
        <p class="m-2 p-2 text-lg border-2 border-[#f5cb5c] justify-center font-bold d"> Total price = 
            {{ parseFloat(Carted_sum.toFixed(1)) }}</p> <!-- to get only the first decimal in the float -->
        <div class="flex w-auto h-auto gap-5">
        <div v-if="username && carted_products.length > 0">
            <ButtonComponent class="grow" @click="checkout">Check out</ButtonComponent></div>
        <div v-else-if="!username"> <RouterLink to="Signin"><ButtonComponent> Login to checkout </ButtonComponent></RouterLink></div>
        <div v-else-if="username && carted_products.length === 0"> <ButtonComponent class="grow bg-gray-600 text-gray-300 cursor-not-allowed" disabled>Check out</ButtonComponent> </div>
            <ButtonComponent class="grow"><RouterLink to="/Shopping">Continue shopping</RouterLink></ButtonComponent>
        </div>
    </div>
    </div>
</template>