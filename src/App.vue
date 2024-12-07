<template>
  <MyNav/>
  <RouterView class="h-screen"/>
  <Footer/>
</template>

<script setup>
import { RouterView } from 'vue-router';
import MyNav from './components/MyNav.vue';
import Footer from './components/Footer.vue';
</script>
