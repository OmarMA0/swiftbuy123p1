<script setup>
import ButtonComponent from '../common/ButtonComponent.vue';
import { carted_products , add_product } from '@/stores/carted_products';
import { username } from '@/stores/user';
const props = defineProps(['product'])
import { useRouter , RouterLink } from 'vue-router'
const router = useRouter()

function toCart(){
  add_product(props.product)
  router.push('/CartView')
}

</script>

<template>
  <div class="border-2 md:border-4 rounded-xl p-3 sm:p-4 md:p-5 m-2 w-full sm:w-80 
  md:w-96 h-auto min-h-72 sm:min-h-80 bg-[#242423]/80 border-[#f5cb5c] shadow-lg flex flex-col gap-2 md:gap-3">
    <h1 class="text-sm sm:text-base md:text-lg font-bold text-white line-clamp-2">{{ product.title }}</h1>
        <p class="text-xs sm:text-sm md:text-base text-[#f5cb5c] font-semibold">price :{{ product.price }}</p>
        <p class="text-xs sm:text-sm text-gray-300">amount available : {{ product.rating.count }}</p>
         <div class="flex justify-center items-center flex-grow my-2">
    <img class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" 
        :src="product.image" 
        alt="product"
              />
    </div>
        <div class="w-full mt-auto" v-if="username">
    <ButtonComponent  class="w-full text-sm md:text-base"  @click="toCart">add to cart</ButtonComponent>
          </div>
          <div class="w-full mt-auto" v-else>
    <ButtonComponent  class="w-full text-sm md:text-base" ><RouterLink class="block w-full h-full"  to="/Signin"> Sign in </RouterLink></ButtonComponent>
          </div>

  </div>

</template>

<style scoped></style>