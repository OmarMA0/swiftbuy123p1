<script setup>
import ButtonComponent from '../components/common/ButtonComponent.vue';
import SContainer from '@/components/common/SContainer.vue';
import { username } from '@/stores/user';
import { RouterLink } from 'vue-router';
import { ShoppingBag } from 'lucide-vue-next';
import { calculate_featured, featured_products } from '@/stores/products';
import rowShowItems from '@/components/common/rowShowItems.vue';
import { products } from '@/stores/products';
import ProductCard from '@/components/products/ProductCard.vue';

calculate_featured();
</script>

<template>
    <div class="min-h-screen w-full text-white p-4 md:p-6 lg:p-8">
        <!-- Hero Section -->
        <div class="max-w-7xl mx-auto">
            <!-- Title -->
            <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#f5cb5c] drop-shadow-2xl italic text-center lg:text-left mb-8 md:mb-12">
                Swiftbuy
            </h1>

            <!-- Main Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12">
                <!-- Left Column: Auth or Welcome -->
                <div class="flex items-start justify-center lg:justify-start">
                    <!-- Login/Signup Card (not logged in) -->
                    <div 
                        v-if="!username" 
                        class="rounded-xl p-5 md:p-6 lg:p-8 w-full max-w-md bg-[#242423]/90 border-2 border-[#f5cb5c] shadow-2xl backdrop-blur-sm flex flex-col gap-4 md:gap-5"
                    >
                        <p class="text-sm sm:text-base md:text-lg p-3 md:p-4 border-2 border-[#f5cb5c] font-bold drop-shadow-lg rounded text-center">
                            New to Swiftbuy? Make a new account here to start shopping
                        </p>
                        
                        <ButtonComponent class="w-full">
                            <router-link class="block w-full h-full text-center py-1" to="/Signup">
                                Sign up
                            </router-link>
                        </ButtonComponent>
                        
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-[#f5cb5c]/30"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-2 bg-[#242423] text-gray-400">or</span>
                            </div>
                        </div>
                        
                        <p class="text-sm sm:text-base md:text-lg p-3 md:p-4 border-2 border-[#f5cb5c] font-bold drop-shadow-lg rounded text-center">
                            Already have an account?
                        </p>
                        
                        <ButtonComponent class="w-full">
                            <router-link class="block w-full h-full text-center py-1" to="/Signin">
                                Login
                            </router-link>
                        </ButtonComponent>
                    </div>

                    <!-- Welcome Back (logged in) -->
                    <SContainer v-else class="w-full max-w-md">
                        <div class="text-center space-y-4">
                            <p class="text-lg md:text-xl lg:text-2xl font-bold">
                                Welcome back, <span class="text-[#f5cb5c]">{{ username }}</span>!
                            </p>
                            <p class="text-sm md:text-base text-gray-300">
                                Ready to continue shopping?
                            </p>
                            <ButtonComponent class="w-full">
                                <router-link class="flex justify-center items-center gap-2 py-1" to="/Shopping">
                                    <ShoppingBag :size="20" />
                                    <span>Start Shopping</span>
                                </router-link>
                            </ButtonComponent>
                        </div>
                    </SContainer>
                </div>

                <!-- Right Column: Featured Products -->
                <div class="w-auto">
                    <SContainer class="mb-4 md:mb-6 w-auto lg:w-full">
                        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#f5cb5c] text-center lg:text-left">
                            ⭐ Featured Products
                        </h2>
                    </SContainer>
                    
                    <!-- Featured Products Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                        <ProductCard 
                            v-for="product in featured_products" 
                            :key="product.id"
                            :product="product"
                        />
                    </div>
                    
                    <!-- Empty State -->
                    <div v-if="!featured_products || featured_products.length === 0" class="text-center py-12">
                        <p class="text-gray-400 text-lg">No featured products available</p>
                    </div>
                </div>
                <!-- Products Silde Shows (Bottom Left Column) -->
                <div>
                    <!---Electronics--->
                    <div class="flex flex-col">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f5cb5c] p-2 rounded mb-4">Electronics</h3>
                    <rowShowItems :products="[...products].filter(p=>p.category === 'electronics')"></rowShowItems>
                    </div>
                    <!---Jewelery--->
                    <div class="flex flex-col">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f5cb5c] p-2 rounded mb-4">Jewelery</h3>
                    <rowShowItems :products="[...products].filter(p=>p.category === 'jewelery')"></rowShowItems>
                    </div>
                    <div class="flex flex-col">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f5cb5c] p-2 rounded mb-4">Clothing for Men</h3>
                    <rowShowItems :products="[...products].filter(p=>p.category === `men's clothing`)"></rowShowItems>
                    </div>
                    <div class="flex flex-col">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f5cb5c] p-2 rounded mb-4">Clothing for Women</h3>
                    <rowShowItems :products="[...products].filter(p=>p.category === `women's clothing`)"></rowShowItems>
                    </div>
                </div>
            </div>

            <!-- Call to Action (bottom) -->
            <div v-if="!username" class="text-center mt-12 md:mt-16 lg:mt-20">
                <div class="bg-[#242423]/80 border-2 border-[#f5cb5c] rounded-xl p-6 md:p-8 max-w-2xl mx-auto backdrop-blur-sm">
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f5cb5c] mb-4">
                        Ready to start shopping?
                    </h3>
                    <p class="text-base md:text-lg text-gray-300 mb-6">
                        Join thousands of happy customers and discover amazing products at great prices
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        
                        <ButtonComponent>
                            <router-link class="flex items-center justify-center gap-2 px-8 py-2" to="/Shopping">
                                <ShoppingBag :size="20" />
                                <span>Browse Products</span>
                            </router-link>
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-image: linear-gradient(to bottom, rgba(0,0,0,.3) 0%, rgba(0,0,0,0.9) 100%), url('../assets/images/Background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
}
</style>