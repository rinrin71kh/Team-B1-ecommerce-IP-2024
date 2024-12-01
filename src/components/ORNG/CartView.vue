<script setup>
import { useCartStore } from '@/stores/cartStore';
import ProductList from './ProductList.vue'
import Checkout from './Checkout.vue'
const cartStore = useCartStore();

function handleRemove(productId) {
  cartStore.removeFromCart(productId);
}

function handleUpdateQuantity(productId, quantity) {
  cartStore.updateQuantity(productId, quantity);
}
</script>

<template>
  <div>
  <ProductList/>
    <h2>Your Cart</h2>
    <div v-if="cartStore.cartItems.length > 0">
      <div class="cart-item" v-for="item in cartStore.cartItems" :key="item.id">
        <img :src="item.image" :alt="item.name" />
        <h3>{{ item.name }}</h3>
        <p>\${{ item.price.toFixed(2) }} x {{ item.quantity }}</p>
        <p>Total: \${{ (item.price * item.quantity).toFixed(2) }}</p>
        <button @click="handleRemove(item.id)">Remove</button>
        <input type="number" v-model.number="item.quantity" @change="handleUpdateQuantity(item.id, item.quantity)" />
      </div>
      <h3>Cart Total: \${{ cartStore.cartTotalPrice.toFixed(2) }}</h3>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
  <Checkout/>
</template>
