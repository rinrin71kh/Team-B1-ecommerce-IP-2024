<template>
    <div class="px-16 py-10 bg-gray-50">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">Special Offer</h2>
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
            <div class="text-sm text-gray-600 flex items-center mt-2">
              <span class="material-icons text-blue-500 text-base">schedule</span>
              <span class="ml-1">
                Deal ends in {{ product.dealEnds }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SpecialOffers",
    data() {
      return {
        products: [
          {
            name: "Sony ULT FIELD 1 Wireless Portable...",
            image: "/path-to-image/sony-1.png",
            price: "$99.00",
            originalPrice: "$129.00",
            monthlyPayment: "$9.00/mo.",
            dealEnds: "25d 14:27:09",
            isNew: true,
            badge: "/path-to-image/badge-1.png",
          },
          {
            name: "Sony ULT TOWER 10 Wireless Party Speaker",
            image: "/path-to-image/sony-2.png",
            price: "$1,169.00",
            originalPrice: "$1,199.00",
            monthlyPayment: "$104.00/mo.",
            dealEnds: "25d 14:27:09",
            isNew: true,
            badge: "/path-to-image/badge-1.png",
          },
          // Add more products as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Add custom styling here */
  </style>
  