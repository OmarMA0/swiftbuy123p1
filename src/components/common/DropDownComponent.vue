<script setup>
import { ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';
const props = defineProps(['controls'])
const isOpen = ref(false)
import { ChevronDown } from 'lucide-vue-next';
</script>

<template>
    <div class="flex flex-col m-2 p-2">
    <ButtonComponent @click="isOpen=!isOpen" class="flex flex-row justify-between py-2"><slot></slot><ChevronDown size="16"/></ButtonComponent>

    <div class="bg-[#242423] p-2 rounded"  v-if="isOpen">
        <ul class="flex flex-col " v-for="control in controls">
            <ButtonComponent @click="$emit('control-clicked', control)">{{ control }}</ButtonComponent>
        </ul>
    </div>
    </div>
</template>