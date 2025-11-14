<script setup>
import ButtonComponent from '../common/ButtonComponent.vue';
import { remove_product , increase_B_amount , decrease_B_amount , get_carted_product } from '@/stores/carted_products';
import { ref , computed } from 'vue';
const props = defineProps(['product'])
import { useRouter } from 'vue-router'
const currentProduct = computed(() => get_carted_product(props.product.id))

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
  <div class="border-4 rounded-xl p-5 m-2 w-128 h-120 bg-[#242423] border-[#f5cb5c] shadow-lg flex flex-col gap-3">
    <h1>{{ product.title }}</h1>
        <p>price :{{ product.price }}</p>
        <p>amount available : {{ product.rating.count }}</p>
        <img class="max-w-24 max-h-24 min-w-24 min-h-24" :src="product.image" alt="product"/>
    <ButtonComponent @click="increase_amount">+</ButtonComponent>
    <ButtonComponent @click="decrease_amount">-</ButtonComponent>
    <p class="m-2 p-2 text-lg border-2 border-[#f5cb5c] font-bold drop-shadow-lg rounded">
        {{currentProduct?.amount || 0}}</p>
    <ButtonComponent @click="delete_product">X</ButtonComponent>
        

  </div>

</template>

<style scoped></style>