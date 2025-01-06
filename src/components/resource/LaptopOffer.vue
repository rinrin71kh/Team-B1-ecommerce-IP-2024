<template>
    <div class="p-6 bg-gray-50">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">Laptop Offer</h2>
        <a href="#" class="text-blue-500 hover:underline text-sm flex items-center">
          View all &nbsp; <span class="material-icons">chevron_right</span>
        </a>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="bg-white border rounded-lg shadow hover:shadow-md transition"
        >
          <div class="p-3">
            <div class="flex justify-between items-center">
              <span
                v-if="product.isNew"
                class="bg-red-500 text-white text-xs px-2 py-1 rounded"
              >
                NEW
              </span>
              <img
                v-if="product.badge"
                :src="product.badge"
                alt="badge"
                class="h-6"
              />
            </div>
            <img
              :src="product.image"
              :alt="product.name"
              class="h-32 w-full object-contain my-3"
            />
            <h3 class="text-sm font-medium text-gray-800 mb-1 truncate">
              {{ product.name }}
            </h3>
            <p class="text-red-500 font-bold text-lg">
              {{ product.price }}
            </p>
            <p class="text-gray-400 line-through text-sm">
              {{ product.originalPrice }}
            </p>
            <p v-if="product.monthlyPayment" class="text-gray-600 text-sm">
              Or {{ product.monthlyPayment }} for 12 mo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LaptopOffer",
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
  </script>

  