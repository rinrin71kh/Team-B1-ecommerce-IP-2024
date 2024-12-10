<template>
    <div class="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-md absolute z-10 right-[50px]">
      <div v-for="(item, index) in cartItems" :key="index" class="flex items-center mb-4">
        <img :src="item.image" alt="Product Image" class="w-16 h-16 object-cover mr-4" />
        <div class="flex-1">
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <p class="text-sm text-gray-500">{{ item.description }}</p>
          <p class="text-sm font-semibold">$ {{ item.price }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <button
            @click="updateQuantity(index, item.quantity - 1)"
            class="w-7 h-7 bg-primary hover:bg-gray-600 rounded-md flex items-center justify-center"
          >
            -
          </button>
          <span class="w-8 text-center border-2 border-black">{{ item.quantity }}</span>
          <button
            @click="updateQuantity(index, item.quantity + 1)"
            class="w-7 h-7 bg-primary hover:bg-gray-600 rounded-md flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
      <div class="pt-4">
        <div class="flex justify-between text-lg font-semibold">
          <span>Subtotal</span>
          <span>$ {{ subtotal }}</span>
        </div>
        <div class="flex justify-between text-lg font-semibold">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div class="flex justify-between text-lg font-bold border-t py-4">
          <span>Total</span>
          <span>$ {{ subtotal }}</span>
        </div>
      </div>
      <div class="mt-4 flex justify-center gap-3 ">
        <a href="/viewcart" class="px-4 py-2 bg-primary w-full hover:bg-gray-600 rounded-md text-center text-white">View Cart</a>
        <a class="px-4 py-2 bg-primary w-full text-white hover:bg-green-600 rounded-md text-center">
          Checkout
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [
          {
            name: "MacBook Pro M3",
            description: "M2 Chip / 8GB / SSD 256GB",
            price: 1199,
            quantity: 1,
            image: "https://via.placeholder.com/64", // Replace with the actual product image URL
          },
          {
            name: "MacBook Pro M3",
            description: "M2 Chip / 8GB / SSD 256GB",
            price: 1199,
            quantity: 1,
            image: "https://via.placeholder.com/64", // Replace with the actual product image URL
          },
        ],
      };
    },
    computed: {
      subtotal() {
        return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    methods: {
      updateQuantity(index, newQuantity) {
        if (newQuantity < 1) return; // Prevent quantity below 1
        this.cartItems[index].quantity = newQuantity;
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can add custom styling here if needed */
  </style>
  