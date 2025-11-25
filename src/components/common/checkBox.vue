<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>
<template>
    
<div class="flex gap-3">
<input type="checkbox"
:checked="modelValue"
@input="$emit('update:modelValue',$event.target.checked)">
<slot></slot></input>
</div>
</template>