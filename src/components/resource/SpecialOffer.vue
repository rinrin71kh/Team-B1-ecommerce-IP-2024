<template>
  <div class="md:px-16 px-4 py-10 bg-gray-50">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-yellow-400 text-2xl md:text-4xl font-bold">Special Offer</h2>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="(product, index) in products" :key="index"
        class="bg-white flex flex-col justify-between border rounded-lg shadow hover:shadow-md transition">
        <a :href="`/product/${product.id}`" class="p-3 relative">
                  <div class="p-3 relative">
            <div class="absolute w-full">
              <div class="flex items-center justify-between mx-4  md:mx-8">
                <span class="bg-red-500 text-white text-sm md:text-md px-4 font-semibold py-1 rounded">
                  NEW
                </span>
                <img src="/warranty.png" alt="badge" class="h-10 md:h-14" />
              </div>
            </div>
            <img :src="url + product.proImage?.link.href" :alt="product.proImage?.link.name"
              class="h-42 w-full object-contain my-3" />
            <h3 class="text-xl font-semibold text-gray-800 mb-1 line-clamp-2">
              {{ product.productname }}
            </h3>
            <p class="text-gray-500 text-sm mb-3 line-clamp-2">
              {{ product.proDescription }}
            </p>
          </div>
            <div class="flex gap-2 md:gap-4 py-4 justify-start items-center">
              <p class="text-gray-400 line-through text-lg ">
                ${{ formatPrice(product.basePrice) }}
              </p>
              <p class="text-red-500 font-semibold text-3xl ">
                ${{ formatPrice(Math.round(product.basePrice - (product.basePrice * product.discountasPercentage / 100))) }}
              </p>
            </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductbyCategories } from '@/api/Fetch/fetchProduct';
import { formatPrice } from '@/util';
import { onMounted, ref } from 'vue';

export default {
  name: "SpecialOffers",

  setup() {
    const url = "https://techbox.developimpact.net";
    const products = ref();
    onMounted(async () => {
      const res = await getProductbyCategories("special")
      products.value = res
      console.log(res)
    })

    return {
      products,
      url
    }
  },
  methods:{
    formatPrice
  }
};
</script>

<style scoped>
/* Optional: Add custom styling here */
</style>