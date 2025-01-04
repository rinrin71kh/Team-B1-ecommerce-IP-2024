<script setup lang="ts">
import Slideshow from './Slideshow.vue';
import Component from './Component.vue';
import Footer from '../Footer.vue';
import MyNav from '../MyNav.vue';
import Product_detail from './Product_detail.vue';
import { sendTelegramMessage } from '@/api/payway/BakongPay';
</script>

<template>
    <div class="bg-gray-50">
        <Slideshow/>
        <Component/>
        <!-- <Product_detail /> -->
    </div>
</template>