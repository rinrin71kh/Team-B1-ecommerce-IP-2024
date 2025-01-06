<template>
  <div class=" px-[100px] max-md:px-4 max-lg:px-8 py-14">
    <!-- Navigation Tabs -->

    <v-tabs
    
      center-active
      
      color="primary"
      slider-color="primary"
      class="border-b border-gray-300 border-gray-1 mb-6 items-end text-nowrap max-md:overflow-x-auto scrollbar-hide text-gray-500"
    >
      <v-tab class="hover:bg-slate-200 " value="labtop">laptop</v-tab>
      <v-tab class="hover:bg-slate-200 ">Desktop</v-tab>
      <v-tab class="hover:bg-slate-200 ">Monitor</v-tab>
      <v-tab class="hover:bg-slate-200 ">PC Components</v-tab>
      <v-tab class="hover:bg-slate-200 ">Accessories</v-tab>
      <v-tab class="hover:bg-slate-200 ">Audio Device</v-tab>
      <v-tab class="hover:bg-slate-200 ">Audio Device</v-tab>
      <v-tab class="hover:bg-slate-200 ">Printer</v-tab>
    </v-tabs>


    <!-- Heading and Sorting -->
    <div class="flex justify-between items-center   max-md:flex-col-reverse max-md:space-y-4">
      <div class="w-full flex items-center space-x-4 py-4 ">
        <h1 class="text-2xl font-semibold text-gray-800">MacBook</h1>
      </div>
      <div class="flex items-center space-x-2  max-md:w-full  justify-between">
        <div class="flex items-center space-x-2">
          <label for="sort" class="text-sm text-gray-600 text-nowrap pr-2">Sort By:</label>
          <select id="sort" class="border border-gray-300 px-3 py-1 max-md:px-2 text-gray-700">
            <option value="default">Default</option>
            <option value="price-low-high ">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>

        <div>


          <div class="flex items-center space-x-2">
            <button class="p-2 border-1 hover:bg-slate-200 border-gray-300  bg-transparent">
              <!-- Grid View Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24"
                fill="">
                <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
              </svg>
            </button>
            <button class="p-2 border bg-transparent  hover:bg-slate-200">
              <!-- List View Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24"
                fill="">
                <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Grid -->
    <div v-if="products" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Single Product Card -->
      <div v-for="product in products" :key="product.id" class="bg-white rounded shadow-md p-4">
        <img :src="url + product.proImage?.link.href" :alt="product.productname"
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
              $ {{ product.basePrice | number }}
            </p>
          </div>
        </div>
        <v-btn @click="addtoCart('Carts', product.id, 1, 'testinguserfid')"
          v-if="product.availableStatus?.key === 'available' && status"
          class="w-auto  custom-btn" variant="outlined" rounded="0" height="44">
          Add to Cart
        </v-btn>



        <v-btn v-else-if="!status" type="button"
          class="w-auto  custom-btn" disabled>
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>Processing...
        </v-btn>
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
  data() {
    return {
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
      } finally {
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

<style scoped>
.custom-btn {
  background-color: transparent !important;
  box-shadow: none !important;
  outline: '#254061' !important;
}

.custom-btn:hover {
  background-color: #254061 !important;
  color: white !important;

}

.custom-width {
  width: 300px;
}

.custom-bg {
  background-color: #f8fafc; /* Tailwind's slate-50 color */
  border-radius: 9999px; /* Tailwind's rounded-full */
}
</style>
