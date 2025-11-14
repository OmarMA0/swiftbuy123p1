<script setup>
import ButtonComponent from '../common/ButtonComponent.vue';
import baseInput from '../common/baseInput.vue';
import { RouterLink} from 'vue-router'
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import { username, clearUsername } from '@/stores/user'
import {search} from '@/stores/search'
const router = useRouter()
function Logout(){
    clearUsername()
    router.push('/')
}
</script>

<template>
    <div class="sticky top-0 z-50 flex flex-wrap bg-[#242423] justify-center items-center gap-2 md:gap-4 lg:gap-20 w-full text-white border-1 rounded border-[#f5cb5c] p-2 overflow-hidden">
        <p v-if="username" class="justify-start m-1 p-1 text-lg border-2 border-[#f5cb5c] font-bold drop-shadow-lg rounded"> Welcome back {{ username }}</p>
        <ButtonComponent><RouterLink to="/">Home</RouterLink></ButtonComponent>
<ButtonComponent v-if="username"> <RouterLink to="/CartView">Cart</RouterLink></ButtonComponent>
    <div class="flex gap-4">
        <ButtonComponent >
            <RouterLink to="Shopping">
            Shopping
            </RouterLink>
        </ButtonComponent>
        <baseInput v-model="search"  placeholder="search ..."></baseInput>
        
    </div>
<ButtonComponent v-if="username" @click="Logout"> Logout </ButtonComponent>
        </div>
</template>