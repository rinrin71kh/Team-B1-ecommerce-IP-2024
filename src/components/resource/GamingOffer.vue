<template>
  <div class="p-6 bg-gray-50">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-3xl font-bold">Gaming Offer</h2>
      <a href="#" class="text-blue-500 hover:underline text-sm flex items-center">
        View all &nbsp; <span class="material-icons">chevron_right</span>
      </a>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="(product, index) in products" :key="index"
        class="bg-white flex flex-col justify-between border rounded-lg shadow hover:shadow-md transition">
        <a :href="`/product/${product.id}`" >
          <div class="p-3 flex flex-col items-between bg-re justify-between">
              <div class="flex justify-end items-center">
                <img src="/warranty.png" alt="badge" class="h-12 md:h-22" />
              </div>
              <img :src="url + product.proImage?.link.href" :alt="product.proImage?.link.name"
                class="h-42 w-full object-contain my-3" />
              <h3 class="text-lg md:text-2xl font-medium text-gray-800 mb-1 ">
                {{ product.productname }}
              </h3>
          </div>
            <div class="flex gap-4 justify-start items-center p-4">
              <p v-if="product.discountasPercentage" class="line-through text-gray-400 text-lg">
                ${{ product.basePrice }}
              </p>
              <p v-if="product.discountasPercentage" class="text-red-600 font-semibold text-3xl">
                ${{ Math.round(product.basePrice - (product.basePrice * product.discountasPercentage / 100)) }}
              </p>
              <p v-else class="text-red-600 font-semibold text-3xl">
                ${{ product.basePrice }}
              </p>
            </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductbyCategories } from '@/api/Fetch/fetchProduct';
import { onMounted, ref } from 'vue';

export default {
  name: "SpecialOffers",

  setup() {
    const url = "https://techbox.developimpact.net";
    const products = ref();
    onMounted(async () => {
      const res = await getProductbyCategories("gaminggear")
      products.value = res.slice(0,4)
      console.log(res)
    })

    return {
      products,
      url
    }
  }
};
</script>