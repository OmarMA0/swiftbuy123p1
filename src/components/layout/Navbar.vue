<script setup>
import { ref } from 'vue';
import ButtonComponent from '../common/ButtonComponent.vue';
import baseInput from '../common/baseInput.vue';
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import { username, clearUsername } from '@/stores/user';
import { search } from '@/stores/search';

const router = useRouter();
const mobileMenuOpen = ref(false);

function Logout() {
    clearUsername();
    router.push('/');
}
</script>

<template>
    <nav class="sticky top-0 z-50 w-full bg-[#242423] border-b-2 border-[#f5cb5c] shadow-lg">
        <!-- Desktop -->
        <div class="hidden md:flex items-center justify-between px-4 py-3 gap-4">
            <div class="flex items-center gap-3 shrink-0">
                <RouterLink to="/"><ButtonComponent>Home</ButtonComponent></RouterLink>
                <RouterLink to="/CartView"><ButtonComponent v-if="username">Cart</ButtonComponent></RouterLink>
            </div>
            
            <p v-if="username" class="px-4 py-2 border-2 border-[#f5cb5c] rounded text-[#f5cb5c] font-bold whitespace-nowrap">
                Welcome {{ username }}
            </p>
            
            <div class="flex items-center gap-3 shrink-0">
                <RouterLink to="/Shopping"><ButtonComponent>Shopping</ButtonComponent></RouterLink>
                <baseInput v-model="search" placeholder="search..." class="w-48"></baseInput>
                <ButtonComponent v-if="username" @click="Logout">Logout</ButtonComponent>
            </div>
        </div>

        <!-- Mobile -->
        <div class="md:hidden">
            <div class="flex items-center justify-between px-4 py-3">
                <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 text-[#f5cb5c]">
                    {{ mobileMenuOpen ? '✕' : '☰' }}
                </button>
                <span v-if="username" class="text-[#f5cb5c] text-sm">Hi, {{ username }}</span>
            </div>

            <div v-if="mobileMenuOpen" class="bg-[#1a1a19] border-t border-[#f5cb5c] px-4 py-3 space-y-2">
                <baseInput v-model="search" placeholder="search..." class="w-full mb-3"></baseInput>
                <RouterLink to="/"><ButtonComponent class="w-full">Home</ButtonComponent></RouterLink>
                <RouterLink to="/CartView"><ButtonComponent v-if="username" class="w-full">Cart</ButtonComponent></RouterLink>
                <RouterLink to="/Shopping"><ButtonComponent class="w-full">Shopping</ButtonComponent></RouterLink>
                <ButtonComponent v-if="username" @click="Logout" class="w-full">Logout</ButtonComponent>
            </div>
        </div>
    </nav>
</template>