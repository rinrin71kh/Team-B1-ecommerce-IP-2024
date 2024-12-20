<template>
  <div class="bg-gray-50 p-6">
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
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
            </svg>
          </button>
          <button class="p-2 border rounded hover:bg-gray-100">
            <!-- List View Icon -->
            <svg xmlns="http://www.w3.org/11992000/svg" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Product Grid -->
    <div v-if="products" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Single Product Card -->
      <div v-for="product in products" :key="product.id" class="bg-white rounded shadow-md p-4">
        <img :src="url + product.proImage.link.href" :alt="product.productname"
          class="w-full h-60 object-cover rounded mb-4" />
        <h2 class="text-lg font-semibold text-gray-800">{{ product.productname }}</h2>
        <p class="text-sm text-gray-600">{{ product.proDescription }}</p>
        <div class="text-gray-500 text-sm mt-1">M2 Chip / 8GB / SSD 256GB / 13.6"</div>
        <div class="flex items-center justify-between mt-3">
          <div class="flex gap-2">
            <p v-if="product.discountasPercentage" class="line-through text-gray-400 text-lg">
              ${{ product.basePrice }}
            </p>
            <p v-if="product.discountasPercentage" class="text-black-200 font-semibold text-2xl">
              ${{ product.basePrice - (product.basePrice * product.discountasPercentage / 100) }}
            </p>
            <p v-else class="text-black-200 font-semibold text-2xl">
              ${{ product.basePrice }}
            </p>
          </div>
        </div>
        <button @click="addtoCart('Carts', product.id, 1, 'testinguserfid')" v-if="product.availableStatus === 'Available' && status "
          class="w-full bg-indigo-500 mt-4 bg-inherit border-2 border-blue-500 text-black rounded-xl py-2 hover:bg-blue-700">
          Add to Cart
        </button>
        <button v-else-if="!status" type="button" class="bg-indigo-500 flex w-full rounded-md justify-center items-center my-2" disabled>
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>Processing...
        </button>
        <button v-else class="w-full mt-4 bg-gray-300 text-gray-600 rounded py-2 cursor-not-allowed">
          Out of Stock
        </button>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getProduct } from '@/api/Fetch/fetchProduct';
import { AddToCart } from '@/api/Cart/AddToCart';

export default {
  data(){
    return{
      status: true,
    }
  },
  setup() {
    const url = "https://techbox.developimpact.net";
    const products = ref(null);

    // Fetch products on component mount
    onMounted(async () => {
      try {
        const response = await getProduct();
        products.value = response;
        console.log(response);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    });

    return {
      url,
      products,
    };
  },
  methods: {
    async addtoCart(cartstatus, productid, qty, userfid) {
      this.status = false;
      try {
        await AddToCart(cartstatus, productid, qty, userfid)
      } catch (error) {
        console.log(error.message);
      } finally{
        this.status = true
      }
      this.status = true
    },
    async IncreaseQTY(cartStatus, productid, qty, userfid, index) {
      this.laoding = true;
      try {
        await AddToCart(cartStatus, productid, qty, userfid);
        this.QTYs[index] += 1;
        this.Price[index] = this.cartItems[index].productDetails.basePrice * this.QTYs[index];
      } catch (error) {
        console.error('Error in IncreaseQTY:', error);
      } finally {
        this.laoding = false;
      }
    },
  }
};
</script>

<style>
/* Custom styles */
</style>
