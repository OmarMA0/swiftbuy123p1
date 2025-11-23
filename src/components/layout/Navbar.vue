<script setup>
import { ref } from 'vue';
import ButtonComponent from '../common/ButtonComponent.vue';
import baseInput from '../common/baseInput.vue';
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import { username, clearUsername } from '@/stores/user';
import { search } from '@/stores/search';
import { ShoppingCart, Home, ShoppingBag, LogOut, Menu, X } from 'lucide-vue-next'; // ✅ Import icons

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
                <RouterLink to="/">
                    <ButtonComponent class="flex items-center gap-2">
                        <Home :size="18" />
                        <span>Home</span>
                    </ButtonComponent>
                </RouterLink>
                
                <RouterLink to="/CartView" v-if="username">
                    <ButtonComponent class="flex items-center gap-2">
                        <ShoppingCart :size="18" />
                        <span>Cart</span>
                    </ButtonComponent>
                </RouterLink>
            </div>
            
            <p v-if="username" class="px-4 py-2 border-2 border-[#f5cb5c] rounded text-[#f5cb5c] font-bold whitespace-nowrap">
                Welcome {{ username }}
            </p>
            
            <div class="flex items-center gap-3 shrink-0">
                <RouterLink to="/Shopping">
                    <ButtonComponent class="flex items-center gap-2">
                        <ShoppingBag :size="18" />
                        <span>Shopping</span>
                    </ButtonComponent>
                </RouterLink>
                
                
                <ButtonComponent v-if="username" @click="Logout" class="flex items-center gap-2">
                    <LogOut :size="18" />
                    <span>Logout</span>
                </ButtonComponent>
            </div>
        </div>

        <!-- Mobile -->
        <div class="md:hidden">
            <div class="flex items-center justify-between px-4 py-3">
                <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 text-[#f5cb5c] flex items-center">
                    <X v-if="mobileMenuOpen" :size="24" />
                    <Menu v-else :size="24" />
                </button>
                <span v-if="username" class="text-[#f5cb5c] text-sm">Hi, {{ username }}</span>
            </div>

            <div v-if="mobileMenuOpen" class="bg-[#1a1a19] border-t border-[#f5cb5c] px-4 py-3 space-y-2">
                
                <RouterLink to="/">
                    <ButtonComponent class="w-full flex items-center justify-center gap-2">
                        <Home :size="20" />
                        <span>Home</span>
                    </ButtonComponent>
                </RouterLink>
                
                <RouterLink to="/CartView" v-if="username">
                    <ButtonComponent class="w-full flex items-center justify-center gap-2">
                        <ShoppingCart :size="20" />
                        <span>Cart</span>
                    </ButtonComponent>
                </RouterLink>
                
                <RouterLink to="/Shopping">
                    <ButtonComponent class="w-full flex items-center justify-center gap-2">
                        <ShoppingBag :size="20" />
                        <span>Shopping</span>
                    </ButtonComponent>
                </RouterLink>
                
                <ButtonComponent v-if="username" @click="Logout" class="w-full flex items-center justify-center gap-2">
                    <LogOut :size="20" />
                    <span>Logout</span>
                </ButtonComponent>
            </div>
        </div>
    </nav>
</template>