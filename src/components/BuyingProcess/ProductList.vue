<script setup>
import { useCartStore } from '@/stores/cartStore';
// import CartView from './CartView.vue'
import ButtonCounter from './MyComponent.vue'

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 79.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Gaming Headset",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "External Hard Drive",
    price: 99.99,
    image: "https://via.placeholder.com/150",
  },
];

const cartStore = useCartStore();

function handleAddToCart(product) {
  cartStore.addToCart(product);
} 



</script>

<template>
  <div class="product-list">
    <div class="product" v-for="product in products" :key="product.id">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>\${{ product.price.toFixed(2) }}</p>
      <button @click="handleAddToCart(product)">Add to Cart</button>
    </div>
  </div>
  <ButtonCounter />
  <!-- <CartView /> -->
</template>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.product {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}
</style>
