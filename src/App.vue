<script setup>
import { onMounted } from 'vue';
import Navbar from './components/layout/Navbar.vue';
import { fetchProducts , products } from './stores/products';
import {RouterView } from 'vue-router'
onMounted(()=>{
   fetchProducts()
})
</script>

<template>
    <div style="min-width: 100%; overflow-x: auto;">
    <Navbar></Navbar>
    <RouterView />
    </div>
</template>

<style>
</style>
