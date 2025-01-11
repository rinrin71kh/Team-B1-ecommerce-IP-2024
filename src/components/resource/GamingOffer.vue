<template>
  <div class="p-6 bg-gray-50">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-bold">Gaming Offer</h2>
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
              <p class="text-gray-400 line-through text-lg ">
                ${{ product.basePrice }}
              </p>
              <p class="text-red-600 font-semibold text-2xl md:text-3xl ">
                ${{ product.basePrice - (product.basePrice * product.discountasPercentage / 100) }}
              </p>
            </div>
        </a>
      </div>
    </div>
  </div>
</template>

<!-- <script>
  export default {
    name: "GamingOffer",
    data() {
      return {
        products: [
          {
            name: "Garmin fenix® 8 Amoled Sapphire...",
            image: "/path-to-image/garmin-1.png",
            price: "$1,199.00",
            originalPrice: "",
            monthlyPayment: "$107.00/mo.",
            isNew: true,
            badge: "/path-to-image/badge-1.png",
          },
          {
            name: "Garmin fenix® 8 Amoled Sapphire...",
            image: "/path-to-image/garmin-2.png",
            price: "$1,299.00",
            originalPrice: "",
            monthlyPayment: "$116.00/mo.",
            isNew: true,
            badge: "/path-to-image/badge-1.png",
          },
          {
            name: "Garmin Fēnix 7X Pro",
            image: "/path-to-image/garmin-3.png",
            price: "$1,120.00",
            originalPrice: "",
            monthlyPayment: "$100.00/mo.",
            isNew: true,
            badge: "/path-to-image/badge-1.png",
          },
          {
            name: "Garmin Epix™ Pro (Gen 2)",
            image: "/path-to-image/garmin-4.png",
            price: "$1,120.00",
            originalPrice: "",
            monthlyPayment: "$100.00/mo.",
            isNew: true,
            badge: "/path-to-image/badge-1.png",
          },
          {
            name: "Huawei Watch GT 5 46mm",
            image: "/path-to-image/huawei-1.png",
            price: "$219.00",
            originalPrice: "",
            monthlyPayment: "$20.00/mo.",
            isNew: true,
            badge: "/path-to-image/badge-1.png",
          },
          {
            name: "Huawei Watch GT 5 Pro 46mm",
            image: "/path-to-image/huawei-2.png",
            price: "$299.00",
            originalPrice: "",
            monthlyPayment: "$27.00/mo.",
            isNew: true,
            badge: "/path-to-image/badge-1.png",
          },
        ],
      };
    },
  };
  </script> -->
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
      products.value = res
      console.log(res)
    })

    return {
      products,
      url
    }
  }
};
</script>