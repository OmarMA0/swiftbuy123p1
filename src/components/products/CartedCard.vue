<script setup>
import ButtonComponent from '../common/ButtonComponent.vue';
import { remove_product , increase_B_amount , decrease_B_amount , get_carted_product } from '@/stores/carted_products';
import { ref , computed } from 'vue';
import { view_product } from '@/stores/viewedP';
const props = defineProps(['product'])
import { useRouter } from 'vue-router'
const router = useRouter()
const currentProduct = computed(() => get_carted_product(props.product.id))
function toProduct(){
  view_product(props.product)
  router.push('/ProductView')
  
}
function increase_amount(){
    increase_B_amount(props.product.id)
}
function decrease_amount(){
    decrease_B_amount(props.product.id)
}
function delete_product(){
    remove_product(props.product.id)
}
</script>

<template>
  <div class="border-2 md:border-4 rounded-xl p-3 sm:p-4 md:p-5 m-2 w-full sm:w-80 
  md:w-96 h-auto min-h-72 sm:min-h-80 bg-[#242423]/80 border-[#f5cb5c] shadow-lg flex flex-col gap-2 md:gap-3">
  <div @click="toProduct" class="cursor-pointer">
        <h1 class="text-sm sm:text-base md:text-lg font-bold text-white line-clamp-2">{{ product.title }}</h1>
        <p class="text-xs sm:text-sm md:text-base text-[#f5cb5c] font-semibold">price :{{ product.price }}</p>
        <p class="text-xs sm:text-sm text-gray-300">amount available : {{ product.rating.count }}</p>
        <img class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" :src="product.image" alt="product"/>
    </div>
    <ButtonComponent class="mt-auto w-full text-sm md:text-base" @click="increase_amount">+</ButtonComponent>
    <ButtonComponent class="mt-auto w-full text-sm md:text-base" @click="decrease_amount">-</ButtonComponent>
    <p class="m-1 p-1  text-xs sm:text-sm md:text-base border-2 border-[#f5cb5c] font-bold drop-shadow-lg rounded mt-auto">
        {{currentProduct?.amount || 0}}</p>
    <ButtonComponent class="mt-auto w-full text-sm md:text-base" @click="delete_product">X</ButtonComponent>
        

  </div>

</template>

<style scoped></style>