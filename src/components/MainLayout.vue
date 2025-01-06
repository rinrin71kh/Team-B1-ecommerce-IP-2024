<script setup lang="ts">
import MyNav from './MyNav.vue';
import Footer from './Footer.vue';
</script>

<template>
    <div class="bg-gray-50">
        <MyNav/>
            <router-view/>
        <Footer/>
    </div>
</template>