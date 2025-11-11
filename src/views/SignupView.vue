<script setup>
import SContainer from '@/components/common/SContainer.vue';
import baseInput from '@/components/common/baseInput.vue';
import ButtonComponent from '@/components/common/ButtonComponent.vue';
import { setUsername } from '@/stores/user'
import { useRouter } from 'vue-router'
import {ref} from 'vue'
const router = useRouter()
const username = ref('')
const password = ref('')
const email = ref('')
const if_all_fields = ref(false)
function Signup() {
    if (username.value && password.value && email.value){
        setUsername(username.value)
        router.push('/Shopping')
        }
    else {
        if_all_fields.value = true
    }

}
</script>

<template>
    <div class="hero h-screen w-screen bg-cover bg-center flex items-center justify-center text-white">
        <SContainer >
            <p>Username : <baseInput v-model="username"></baseInput></p>
            <p>Email : <baseInput type="email" v-model="email"></baseInput></p>
            <p>Password : <baseInput type="password" v-model="password"></baseInput></p>
            <ButtonComponent @click="Signup">Sign up</ButtonComponent>
        </SContainer>
    </div>
</template>