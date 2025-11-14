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
const if_all_fields = ref(false)
function login() {
    if (username.value && password.value){
        alert(`Logged in as ${username.value}`)
        setUsername(username.value)
        router.push('/Shopping')
        }
    else {
        if_all_fields.value = true
    }

}
</script>

<template>
    <div class="flex items-center justify-center text-white">
        <SContainer >
            <p>Username : <baseInput v-model="username"></baseInput></p>
            <p>Password : <baseInput type="password" v-model="password"></baseInput></p>
            <ButtonComponent @click="login">Sign in</ButtonComponent>
            <p v-if="if_all_fields">Please fill in all fields</p>
        </SContainer>
    </div>
</template>