<script setup>
import Navbar from './components/layout/Navbar.vue';
import ProductGrid from './components/products/ProductGrid.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div style="min-width: 100%; overflow-x: auto;">
    <Navbar></Navbar>
    <router-view />
    </div>
</template>

<style>
</style>
