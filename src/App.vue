<template>

  <div class="bg-slate-100">
    <MyNav/>
    <tab/>
    
    <RouterView class="h-screen"/>
     
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MyNav from './components/MyNav.vue';
import Footer from './components/Footer.vue';
import tab from './components/tab.vue';

</script>


