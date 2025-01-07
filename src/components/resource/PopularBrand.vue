<template>
    <div class="md:px-16 px-4">
      <h2 class="text-xl md:text-2xl font-bold mb-4">Popular Brands</h2>
      <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 md:gap-4">
        <div
          v-for="(brand, index) in brands"
          :key="index"
          class="flex items-center justify-center md:rounded-lg w-fit hover:shadow-md transition"
        >
          <img
            :src="brand.logo"
            :alt="brand.name"
            class="h-12 max-w-full object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PopularBrands",
    data() {
      return {
        brands: [
          { name: "Apple", logo: "/brandlogo/apple.jpg" },
          { name: "Samsung", logo: "/brandlogo/samsung.jpg" },
          { name: "Sony", logo: "/brandlogo/sony.jpg" },
          { name: "Xiaomi", logo: "/brandlogo/xiaomi.jpg" },
          { name: "Huawei", logo: "/brandlogo/huawei.jpg" },
          { name: "Oppo", logo: "/brandlogo/oppo.jpg" },
          { name: "Google", logo: "/brandlogo/google.jpg" },
          { name: "OnePlus", logo: "/brandlogo/havit.jpg" },
          { name: "ASUS", logo: "/brandlogo/asus.jpg" },
          
          { name: "vivo", logo: "/brandlogo/vivo.jpg" },
          { name: "energizer", logo: "/brandlogo/energizer.jpg" },
          { name: "jbl", logo: "/brandlogo/jbl.jpg" },
          { name: "motorola", logo: "/brandlogo/motorola.jpg" },
          { name: "leonovo", logo: "/brandlogo/lenovo.jpg" },
          { name: "microsoft", logo: "/brandlogo/microsoft.jpg" },
          { name: "rhinoshield", logo: "/brandlogo/rhinoshield.jpg" },
          { name: "garmin", logo: "/brandlogo/garmin.jpg" },


          // Add more brands as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Optional custom styles can go here */
  </style>
  