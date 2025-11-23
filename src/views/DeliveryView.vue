<script setup>
import SContainer from '@/components/common/SContainer.vue';
import baseInput from '@/components/common/baseInput.vue';
import ButtonComponent from '@/components/common/ButtonComponent.vue';
import checkBox from '@/components/common/checkBox.vue';
import { useRouter } from 'vue-router'; 
import { computed, ref } from 'vue';
const router = useRouter()
const firstName = ref('')
const lastName = ref('')
const address = ref('')
const phone = ref('')
const City = ref('')
const Street = ref('')
const Building = ref('')
const Apartment = ref('')
const if_all_fields = computed(()=>{
    if(firstName.value && lastName.value && address.value && phone.value && City.value && Street.value && Building.value && Apartment.value){
        return true
    }
    else return false
})
function handleSubmit(){
 if(if_all_fields.value){
    router.push('/')
 }
}
</script>

<template>
    <div class="flex items-center justify-center text-white w-full">
        <SContainer class="p-2" >
            <div class="flex flex-row justify-between gap-2">
                <p>First name : <baseInput v-model="firstName"></baseInput></p>
                <p>Last name : <baseInput v-model="lastName"></baseInput></p>
            </div>
            <p>Adress : <baseInput v-model="address"></baseInput></p>
            <div class="flex flex-row justify-between gap-2">
                <p>City : <baseInput v-model="City"></baseInput></p>
                <p>Street : <baseInput v-model="Street"></baseInput></p>
            </div>
            <p>Phone Number : <baseInput v-model="phone"></baseInput></p>
            <div class="flex flex-row justify-between gap-2">
                <p>Building Number : <baseInput v-model="Building"></baseInput></p>
                <p>Apartment : <baseInput v-model="Apartment"></baseInput></p>
            </div>
            <p> Payment Methods</p>
            <checkBox>Visa</checkBox>
            <p>or Pay at Delivery</p>
            <ButtonComponent @click="handleSubmit">Submit Order</ButtonComponent>
            <p v-if="!if_all_fields">Please fill in all fields</p>
        </SContainer>
    </div>
</template>