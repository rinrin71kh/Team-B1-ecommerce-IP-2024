<template>
    <div class="bg-gray-50 min-h-screen p-6">
      <!-- Navigation Tabs -->
      <nav class="flex space-x-6 text-gray-600 border-b border-gray-300 pb-2 mb-6">
        <a href="#" class="font-medium text-blue-600 border-b-2 border-blue-600 pb-2">Laptop</a>
        <a href="#" class="hover:text-blue-500">Desktop</a>
        <a href="#" class="hover:text-blue-500">Monitor</a>
        <a href="#" class="hover:text-blue-500">PC Components</a>
        <a href="#" class="hover:text-blue-500">Accessories</a>
        <a href="#" class="hover:text-blue-500">Audio Device</a>
        <a href="#" class="hover:text-blue-500">Printer</a>
      </nav>
  
      <!-- Heading and Sorting -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-800">MacBook</h1>
        <div class="flex items-center space-x-2">
          <label for="sort" class="text-sm text-gray-600">Sort By:</label>
          <select id="sort" class="border border-gray-300 rounded px-3 py-1 text-gray-700">
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
          <div class="flex items-center space-x-2">
            <button class="p-2 border rounded hover:bg-gray-100">
              <!-- Grid View Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
              </svg>
            </button>
            <button class="p-2 border rounded hover:bg-gray-100">
              <!-- List View Icon -->
              <svg xmlns="http://www.w3.org/11992000/svg" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Product Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Single Product Card -->
        <div v-for="product in products" :key="product.id" class="bg-white rounded shadow-md p-4">
          <img :src="product.image" :alt="product.name" class="w-full h-60 object-cover rounded mb-4">
          <h2 class="text-lg font-semibold text-gray-800">{{ product.name }}</h2>
          <p class="text-sm text-gray-600">{{ product.description }}</p>
          <div class="text-gray-500 text-sm mt-1">M2 Chip / 8GB / SSD 256GB / 13.6"</div>
          <div class="flex items-center justify-between mt-3">
            <div class="flex gap-2">
              <p class="line-through text-gray-400 text-lg">${{ product.originalPrice }}</p>
              <p class="text-black-200 font-semibold text-2xl">${{ product.discountedPrice }}</p>
            </div>
            <div class="flex space-x-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.429 8.2 1.196-5.934 5.782 1.398 8.147L12 18.897l-7.332 3.844 1.398-8.147L.132 9.212l8.2-1.196z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.429 8.2 1.196-5.934 5.782 1.398 8.147L12 18.897l-7.332 3.844 1.398-8.147L.132 9.212l8.2-1.196z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.429 8.2 1.196-5.934 5.782 1.398 8.147L12 18.897l-7.332 3.844 1.398-8.147L.132 9.212l8.2-1.196z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.429 8.2 1.196-5.934 5.782 1.398 8.147L12 18.897l-7.332 3.844 1.398-8.147L.132 9.212l8.2-1.196z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 12 24">
                <path d="M12 .587l3.668 7.429 8.2 1.196-5.934 5.782 1.398 8.147L12 18.897l-7.332 3.844 1.398-8.147L.132 9.212l8.2-1.196z" />
              </svg>
              <span class="text-sm text-gray-500">({{ product.reviews }})</span>
            </div>
          </div>
          <button
            v-if="product.available"
            class="w-full mt-4 bg-inherit border-2 border-blue-500 text-black rounded-xl py-2 hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <button
            v-else
            class="w-full mt-4 bg-gray-300 text-gray-600 rounded py-2 cursor-not-allowed"
          >
            Out of Stock
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: "MacBook Pro M44",
            description: "M2 Chip / 8GB / SSD 256GB /13.6\"",
            image: "/macbook/M4.png",
            originalPrice: "3450",
            discountedPrice: "3250",
            reviews: 42,
            available: true,
          },
          {
            id: 2,
            name: "MacBook Pro M3",
            description: "Latest model with M2 Chip",
            image: "/images/mackbook/imac-digitalmat-gallery-2-202410.png",
            originalPrice: "2999",
            discountedPrice: "2899",
            reviews: 119,
            available: true,
          },
          {
            id: 3,
            name: "MacBook Air M3",
            description: "M2 Chip / 8GB / SSD 256GB",
            image: "/images/mackbook/imac-digitalmat-gallery-2-202410.png",
            originalPrice: "1650",
            discountedPrice: "1450",
            reviews: 89,
            available: true,
          },
          {
            id: 4,
            name: "MacBook M2 Series",
            description: "M2 Chip / 8GB / SSD 256GB",
            image: "/images/mackbook/imac-digitalmat-gallery-2-202410.png",
            originalPrice: "1399",
            discountedPrice: "1199",
            reviews: 53,
            available: false,
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  /* Custom styles */
  </style>
  