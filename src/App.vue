<script setup>
import Navbar from './components/layout/Navbar.vue';
import ProductGrid from './components/products/ProductGrid.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <Navbar></Navbar>
    <router-view />
</template>

<style>
</style>
