<script setup>
import ButtonComponent from '../components/common/ButtonComponent.vue';
import SContainer from '@/components/common/SContainer.vue';
import { username} from '@/stores/user'
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="min-h-screen w-full text-white flex flex-col lg:flex-row gap-4 md:gap-10 p-4 md:p-6">
        <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-[#f5cb5c] drop-shadow-lg italic m-2 p-3">Swiftbuy</h1>
        <div 
        class="flex items-center justify-center w-full">
        <div class="rounded-xl p-4 sm:p-5 md:p-6 m-2 w-full sm:w-96 md:w-[32rem] h-auto bg-[#242423]/50 border-2
         border-[#f5cb5c] shadow-lg flex flex-col gap-4 md:gap-5 text-white" v-if="!username">
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
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-image: linear-gradient(to bottom, rgba(0,0,0,.2) 20%, rgba(0,0,0,0.8) 100%), url('../assets/images/Background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* Keeps background fixed while scrolling */
    background-repeat: no-repeat;
}

</style>
