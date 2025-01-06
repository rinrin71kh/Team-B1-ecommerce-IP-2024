<template>

  <div class="bg-slate-100">
    <RouterView class="h-screen"/>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MyNav from './components/MyNav.vue';
import Footer from './components/Footer.vue';

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap');
body {
  font-family: 'Kantumruy Pro', sans-serif;
}
</style>
