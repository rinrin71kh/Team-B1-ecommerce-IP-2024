<template>

  <div class="bg-slate-100">
    <!-- <test/> -->
    <MyNav/>
    <RouterView class="h-screen"/>
     <Footer/>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MyNav from './components/MyNav.vue';
import Footer from './components/Footer.vue';
import test from './components/test.vue'; // Corrected import statement
</script>


