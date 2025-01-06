<template>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div v-for="(product, index) in products" :key="product.id" class="bg-white rounded shadow-md p-4">
      <img :src="url + product.proImage?.link?.href" :alt="product.productname"
        class="w-full h-60 object-cover rounded mb-4" />
      <h2 class="text-lg font-semibold text-gray-800">
        {{ product.productname }}
      </h2>
      <p class="text-sm text-gray-600">{{ product.proDescription }}</p>
      <div class="text-gray-500 text-sm mt-1">
        M2 Chip / 8GB / SSD 256GB / 13.6"
      </div>
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
      <button @click="addtoCart('Carts', product.id, 1, 'testinguserfid')"
        v-if="product.availableStatus?.key == 'available' && status[product.id]"
        class="w-full bg-indigo-700 mt-4 bg-inherit border-2 border-blue-500 text-white py-2 hover:bg-blue-700">
        Add to Cart
      </button>
      <button v-else-if="!status[product.id]" type="button"
        class="bg-indigo-500 flex w-full justify-center items-center " disabled>
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
        Processing...
      </button>
      <button v-else class="w-full mt-4 bg-gray-300 text-gray-600 rounded py-2 cursor-not-allowed">
        Out of Stock
      </button>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { getProduct } from "@/api/Fetch/fetchProduct";
import { AddToCart } from "@/api/Cart/AddToCart";

export default {

  methods: {
    addtoCart(cartstatus, productid, qty, userfid) {
      this.$emit("add-to-cart", cartstatus, productid, qty, userfid);
    },
  },
  setup() {
    const url = "https://techbox.developimpact.net";
    const products = ref(null);
    const status = ref({});

    onMounted(async () => {
      try {
        const response = await getProduct();
        products.value = response;
        console.log(products)
        
        response.forEach((product) => {
          status.value[product.id] = true;
        });

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    });

    const addtoCart = async (cartstatus, productid, qty, userfid) => {
      status.value[productid] = false;

      try {
        await AddToCart(cartstatus, productid, qty, userfid);
      } catch (error) {
        console.log("Error adding to cart:", error.message);
      } finally {
        status.value[productid] = true;
      }
    };

    return {
      url,
      products,
      status,
      addtoCart,
    };
  },
};
</script>
