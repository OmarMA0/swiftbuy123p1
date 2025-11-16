<script setup>
import ButtonComponent from '@/components/common/ButtonComponent.vue';
import { useRouter } from 'vue-router';
import { is_in_carted_products , add_product , remove_product } from '@/stores/carted_products';
import { computed } from 'vue';
import { ViewedP } from '@/stores/viewedP';
import { ShoppingCart } from 'lucide-vue-next';
const product = computed(()=>ViewedP.value)
const Addition_Removal = computed(()=>{
    if (!product.value || !product.value.id) {
        return 'Add to Cart';
    }
    
    if (is_in_carted_products(product.value.id)) {
        return 'Remove from Cart';
    } else {
        return 'Add to Cart';
    }
})
function Add_Remove(){
     if (!product.value) {
        console.error('No product to add/remove');
        return;
    }
    
    if (Addition_Removal.value === 'Add to Cart') {
        add_product(product.value);
    } else {
        remove_product(product.value.id);
    }
}
</script>

<template>
    <div class="p-4 md:p-8 text-white">
    <!--wait-->
    <div v-if="product" class="ax-w-4xl mx-auto">
    <div class="border-2 md:border-4 rounded-xl p-6 md:p-8 bg-[#242423]/80 border-[#f5cb5c] shadow-lg 
    flex flex-col gap-6">
    <div class="flex justify-center"><img class="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain" 
        :src="product.image" alt="product"/>
</div>
    <h1 class="text-xl sm:text-2xl md:text-3xl font-bold" >{{ product.title }}</h1>
        <p class="text-sm sm:text-base text-gray-300">{{ product.description }}</p>
         <div class="flex flex-col gap-3">
          <p class="text-lg sm:text-xl md:text-2xl text-[#f5cb5c] font-bold">Price: ${{ product.price }}</p>
          <p class="text-sm sm:text-base text-gray-300">Amount available: {{ product.rating.count }}</p>
          <p class="text-sm sm:text-base text-gray-300">Rating: ⭐{{ product.rating.rate }}/5</p>
        </div>
        <button-component @click="Add_Remove" class="w-full md:w-auto flex justify-center items-center gap-2">
            <ShoppingCart :size="18"/>
            <span>{{ Addition_Removal }}</span>
        </button-component>
    </div>
    </div>
    </div>
</template>