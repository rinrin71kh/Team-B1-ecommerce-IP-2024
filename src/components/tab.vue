<template>
  <div class="px-16 py-10 bg-gray-50">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-bold">Special Offer</h2>
      <a href="#" class="text-blue-500 hover:underline text-sm flex items-center">
        View all &nbsp; <span class="material-icons">chevron_right</span>
      </a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="(product, index) in products" :key="index"
        class="bg-white border rounded-lg shadow hover:shadow-md transition">
        <h1>Hello</h1>
        <div class="p-3">
          <div class="flex justify-between items-center">
            <span  class="bg-red-500 text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
            <img src="/warranty.png" alt="badge" class="h-14" />
          </div>
          <!-- <img :src="url+ product.proImage?.link.href" :alt="product.proImage?.link.name" class="h-32 w-full object-contain my-3" /> -->
          <h3 class="text-sm font-medium text-gray-800 mb-1 truncate">
            <!-- {{ product.productname }} -->
          </h3>
          <p class="text-red-500 font-bold text-lg">
            <!-- ${{ product.basePrice - (product.basePrice * product.discountasPercentage / 100) }} -->
          </p>
          <p class="text-gray-400 line-through text-sm">
            <!-- {{ product.basePrice }} -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductbyCategories } from '@/api/Fetch/fetchProduct';
import { onMounted, ref, toRaw } from 'vue';

export default {
  name: "SpecialOffers",
  setup() {
    const products = ref();
    const url = 'https://techbox.developmentimpact.net'
    onMounted(async () => {
      const res = await getProductbyCategories('special');
      products.value = toRaw(res)
      console.log(products.value);
    });
  }
};
</script>
