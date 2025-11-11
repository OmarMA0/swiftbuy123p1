<script setup>
import ButtonComponent from '../components/common/ButtonComponent.vue';
import SContainer from '@/components/common/SContainer.vue';
import { username} from '@/stores/user'
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="hero h-screen w-screen text-white flex gap-10 bg-cover bg-center]">
        <h1 class=" m-2 p-3 font-style: italic drop-shadow-lg text-9xl font-bold text-[#f5cb5c]">Swiftbuy</h1>
        <div 
        class="flex items-center justify-center w-full">
        <SContainer v-if="!username">
    <p>new to Swiftbuy? make a new account here to start shopping</p>
    <ButtonComponent class="grow"><router-link to="/Signup">Sign up</router-link></ButtonComponent>
    <p>already have an account?</p>
    <ButtonComponent><router-link class="w-full" to="/Signin">Login</router-link></ButtonComponent>
    </SContainer>
    <SContainer v-if="username">
        <p>Wlcome back {{ username }} start shopping from here</p>
        <ButtonComponent><router-link to="/Shopping">Shopping</router-link></ButtonComponent>
    </SContainer>
    </div>
    </div>

</template>
<style>
.hero{
    @apply bg-cover bg-center relative;
    background-image: linear-gradient(to bottom, rgba(0,0,0,.2) 20%, rgba(0,0,0,0.8) 100%), url('../assets/images/Background.jpg');
}
</style>
