<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    
    <div class="flex flex-wrap items-center justify-between border-b pb-4 mb-4">
      <h2 class="text-2xl font-semibold">ផលិតផលទាំងអស់</h2>
      <div class="flex items-center space-x-4">
    
        <div class="flex items-center border border-slate-200 rounded-md bg-white shadow-sm">
          <button
            @click="searchProducts"
            class="px-3 text-gray-500 hover:text-gray-700 hover:bg-slate-50 focus:outline-none bg-slate-100 "
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m-1.4-5.6a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </button>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="ស្វែងរក..."
            class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm pl-3 pr-10 py-2 
            focus:outline-none focus:border-slate-400"
          />
        </div>
      
        <RouterLink to="/some-action">
          <button class="p-2 rounded hover:bg-gray-200 bg-slate-50 border-solid border-2 border-gray-300">
            <img class="w-6 h-6" src="../../../../../public/icon/three-dots-vertical.svg" alt="Actions" />
          </button>
        </RouterLink>
      </div>
    </div>

    
    <table class="w-full border-collapse text-gray-700">
      <thead>
        <tr class="bg-gray-100 text-gray-800">
          <th scope="col" class="border border-gray-300 px-4 py-2 text-center w-16">ល.រ</th>
          <th scope="col" class="border border-gray-300 px-4 py-2 text-left">ឈ្មោះផលិតផល</th>
          <th scope="col" class="border border-gray-300 px-4 py-2 text-right w-24">តម្លៃ (៛)</th>
          <th scope="col" class="border border-gray-300 px-4 py-2 text-right w-24">បរិមាណ</th>
          <th scope="col" class="border border-gray-300 px-4 py-2 text-right w-32">សរុបតម្លៃ (៛)</th>
          <th scope="col" class="border border-gray-300 px-4 py-2 text-center w-32">កាលបរិច្ឆេទ</th>
          <th scope="col" class="border border-gray-300 px-4 py-2 text-center w-24">បុគ្គលិក</th>
        </tr>
      </thead>
      <tbody>
        <!-- this is for data -->
        <tr v-for="(product, index) in filteredProducts" :key="index" class="hover:bg-gray-50">
          <td class="border border-gray-300 px-4 py-2 text-center">{{ index + 1 }}</td>
          <td class="border border-gray-300 px-4 py-2 text-left">{{ product.name }}</td>
          <td class="border border-gray-300 px-4 py-2 text-right">{{ product.price }}</td>
          <td class="border border-gray-300 px-4 py-2 text-right">{{ product.quantity }}</td>
          <td class="border border-gray-300 px-4 py-2 text-right">{{ product.totalPrice }}</td>
          <td class="border border-gray-300 px-4 py-2 text-center">{{ product.date }}</td>
          <td class="border border-gray-300 px-4 py-2 text-center">{{ product.staff }}</td>
        </tr>

        
        <tr v-if="filteredProducts.length === 0">
          <td colspan="7" class="text-center py-6 text-gray-500">
            គ្មានទិន្នន័យ
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AllProducts",
  data() {
    return {
      products: [], 
      searchQuery: "", 
    };
  },
  computed: {
    filteredProducts() {
      if (!this.searchQuery) return this.products;
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    searchProducts() {
      // for api call
      console.log("Search triggered for:", this.searchQuery);
    },
  },
};
</script>

<style scoped>
table {
  border-spacing: 0; 
}
thead th {
  background-color: #f3f4f6;
}
tbody tr:hover {
  background-color: #f9fafb;
}
</style>
