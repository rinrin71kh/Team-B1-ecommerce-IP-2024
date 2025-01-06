<template>
  <div class="bg-gray-50 p-6" v-if="data">
    <!-- Product Details Section -->
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Product Image -->
      <div class="flex-1">
        <div class="relative">
          <img
            :src="url+data.proImage.link.href|| 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1671304675566'"
            alt="Product Image"
            class="rounded-lg object-cover w-full max-w-sm mx-auto border border-gray-300"
          />
        </div>
      </div>

      <!-- Product Info -->
      <div class="flex-1">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ data.productname }}</h1>
        <p class="text-sm text-gray-600 mb-4">
          {{ data.proDescription }}
        </p>

        <!-- Rating -->
        <div class="flex items-center mb-4">
          <div class="flex text-yellow-500">
            <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
          <span class="text-sm text-gray-600 ml-2">(53)</span>
        </div>

        <!-- Price -->
        <div class="text-3xl font-bold text-gray-800 mb-4">${{ data.basePrice }}</div>

        <!-- Add to Cart -->
        <div class="flex items-center space-x-4">
          <input
            type="number"
            value="1"
            min="1"
            class="w-16 border border-gray-300 rounded-lg text-center"
          />
          <button
            @click="IncreaseQTY('Carts', data.productid, data.qty, data.userfid)"
            class="bg-blue-600 text-white px-6 py-2 rounded-lg border border-gray-600 hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <!-- Reviews Section -->
    <div class="mt-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">Reviews</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Single Review -->
        <div
          v-for="review in reviews"
          :key="review.id"
          class="bg-white p-4 rounded-lg shadow"
        >
          <p class="text-sm text-gray-800 mb-4">{{ review.text }}</p>
          <div class="flex items-center space-x-4">
            <img
              :src="review.avatar"
              alt="Reviewer Avatar"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p class="text-sm font-semibold text-gray-800">{{ review.name }}</p>
              <p class="text-xs text-gray-600">{{ review.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-screen">
    <p>Loading...</p>
  </div>
</template>

<script>
import { fetchProductByID } from '@/api/Fetch/fetchProductByID';
import { ref, toRaw } from 'vue';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { AddToCart } from '@/api/Cart/AddToCart';

export default {
  data() {
    return {
      reviews: [
        {
          id: 1,
          text: "ខ្ញុំជាអ្នកប្រើជាអ្នកតំណាង! M3 Max មានប្រសិទ្ធភាពខ្ពស់!",
          avatar: "https://via.placeholder.com/40?text=K",
          name: "Kheang OuyOrng",
          date: "02/10/2024",
        },
        {
          id: 2,
          text: "ទំនើបទាន់សម័យ!!",
          avatar: "https://via.placeholder.com/40?text=L",
          name: "Ly Makara",
          date: "02/10/2024",
        },
        {
          id: 3,
          text: "ទំនើបទាន់សម័យ!!",
          avatar: "https://via.placeholder.com/40?text=K",
          name: "Khem Soksombath",
          date: "02/10/2024",
        },
        {
          id: 4,
          text: "ទំនើបទាន់សម័យ!!",
          avatar: "https://via.placeholder.com/40?text=B",
          name: "Khour Borin Satya",
          date: "02/10/2024",
        },
      ],
    }
  },
  setup() {
    const route = useRoute();
    const productId = route.params.id;
    const data = ref(null);
    const loading = ref(true);
    const url = 'https://techbox.developimpact.net';

    onMounted(async () => {
      try {
        const res = await fetchProductByID(productId);
        data.value = toRaw(res);
        
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    });

    return {
      productId,
      data,
      loading,
      url
    }
  },
  methods:{
    async IncreaseQTY(cartStatus, productid, qty, userfid) {
      this.laoding = true;
      try {
        const check = await AddToCart(cartStatus, productid, qty, userfid);
        console.log(check);
        
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
img {
  max-height: 300px; 
}
</style>