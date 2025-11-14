<script setup>
import ButtonComponent from '../components/common/ButtonComponent.vue';
import SContainer from '@/components/common/SContainer.vue';
import { username} from '@/stores/user'
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="hero min-h-screen w-full text-white flex gap-10">
        <h1 class=" m-2 p-3 font-style: italic drop-shadow-lg text-9xl font-bold text-[#f5cb5c]">Swiftbuy</h1>
        <div 
        class="flex items-center justify-center w-full">
        <div class="flex-col  rounded-xl p-5 m-2 w-128 h-auto bg-[#242423]/50 
        border-[#f5cb5c] shadow-lg flex flex-col gap-5 text-white" v-if="!username">
    <p class="justify-start m-3 p-3 text-lg border-2 border-[#f5cb5c] font-bold drop-shadow-lg rounded">new to Swiftbuy? make a new account here to start shopping</p>
    <ButtonComponent class="grow"><router-link class="block w-full h-full" to="/Signup">Sign up</router-link></ButtonComponent>
    <p class="justify-start m-3 p-3 text-lg border-2 border-[#f5cb5c] font-bold drop-shadow-lg rounded">already have an account?</p>
    <ButtonComponent><router-link  class="block w-full h-full" to="/Signin">Login</router-link></ButtonComponent>
        </div>
    <SContainer v-if="username">
        <p>Wlcome back {{ username }} start shopping from here</p>
        <ButtonComponent><router-link class="block w-full h-full" to="/Shopping">Shopping</router-link></ButtonComponent>
    </SContainer>
    </div>
    </div>

</template>
<style>
.hero{
    @apply bg-cover bg-center relative bg-fixed;
    background-image: linear-gradient(to bottom, rgba(0,0,0,.2) 20%, rgba(0,0,0,0.8) 100%), url('../assets/images/Background.jpg');
}
</style>
