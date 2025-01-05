<template>

  <div class="bg-slate-100">

    <MyNav/>
    <RouterView class="h-screen"/>
     <Footer/>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MyNav from './components/MyNav.vue';
import Footer from './components/Footer.vue';

</script>


