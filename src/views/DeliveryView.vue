<script setup>
import SContainer from '@/components/common/SContainer.vue';
import baseInput from '@/components/common/baseInput.vue';
import ButtonComponent from '@/components/common/ButtonComponent.vue';
import checkBox from '@/components/common/checkBox.vue';
import { useRouter } from 'vue-router'; 
import { ref ,computed} from 'vue';
import { carted_products, get_carted_product } from '@/stores/carted_products';
const router = useRouter()
const firstName = ref('')
const lastName = ref('')
const address = ref('')
const phone = ref('')
const City = ref('')
const Street = ref('')
const Building = ref('')
const Apartment = ref('')
const if_all_fields = ref(true)
function handleSubmit(){
 if(firstName.value && lastName.value && address.value && phone.value && City.value && Street.value && Building.value && Apartment.value){
        if_all_fields.value= true
        carted_products.value = []
        router.push('/')
    }

    if_all_fields.value= false
}
const paymentMethod = ref('')
const Carted_sum = computed(()=>{
    let sum = 0
    if (carted_products.value){
    for (const cproduct of carted_products.value){
        sum = cproduct.amount * cproduct.price + sum
        
    }}
    return sum
})
</script>

<template>
    <!---->
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
            <checkBox v-model="paymentMethod" value="visa">Visa</checkBox>
            <checkBox v-model="paymentMethod" value="paypal">PayPal</checkBox>
            <checkBox v-model="paymentMethod" value="delivery">Pay at delivery</checkBox>
            <!--Order-->
            <div class="bg-[#333533]/20 border-1 p-2 rounded border-[#f5cb5c] drop-shadow-2xl flex flex-col gap-1">
            <p class="text-[#f5cb5c] font-semibold drop-shadow-2xl">Your order</p>
            <div v-for="product in carted_products">
                <p>{{ product.title }} x {{ product.amount }}  price : <span class="text-[#f5cb5c]">{{  product.price * product.amount }}</span></p>

            </div>
            <p> Total price before fees :  <span class="text-[#f5cb5c]">{{ parseFloat(Carted_sum.toFixed(1)) }}</span></p>
            <p> Total price after fees :  <span class="text-[#f5cb5c]">{{ parseFloat((Carted_sum*1.025).toFixed(1)) }}</span></p>
            </div>
            <!--Order End-->
            <ButtonComponent @click="handleSubmit">Submit Order</ButtonComponent>
            <p class="text-red-500" v-if="!if_all_fields">Please fill in all the fields</p>
        </SContainer>
    </div>
</template>