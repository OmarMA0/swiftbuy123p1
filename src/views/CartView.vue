<script setup>
import CartedCard from '@/components/products/CartedCard.vue';
import { carted_products } from '@/stores/carted_products';
import ButtonComponent from '@/components/common/ButtonComponent.vue';
</script>

<template>
    <div class="hero h-screen w-screen text-white flex gap-10 bg-cover bg-center]"> 
    <div v-for="product in carted_products" class="flex flex-wrap">
        <CartedCard :product="product" ></CartedCard>
        </div>
    <div class="absolute bottom-0 left-200 border-4 
    rounded-xl p-5 m-2 w-100 justify-end h-40 bg-[#242423] border-[#f5cb5c] shadow-lg flex flex-col gap-3">
        <p class="m-2 p-2 text-lg border-2 border-[#f5cb5c] justify-center font-bold d"> Total price = 200</p>
        <div class="flex w-auto h-auto gap-5">
            <ButtonComponent class="grow">Check out</ButtonComponent>
            <ButtonComponent class="grow">continue shopping</ButtonComponent>
        </div>
    </div>
    </div>
</template>