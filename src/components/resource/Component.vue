<template>
  <div class=" px-16 max-md:px-4 py-14">
    <!-- Navigation Tabs -->
    <nav v-if="$route.path === '/category'"
      class="flex justify-between text-gray-600  mb-6 items-end text-nowrap max-md:overflow-x-auto scrollbar-hide">
      <div>
        <a href="/Macbook" class="font-medium text-primary border-b-3 border-primary pb-3 px-3">Laptop</a>
        <a href="#" class="hover:text-primary px-3 pb-3">Gaming</a>
        <a href="#" class="hover:text-primary px-3 pb-3">Apple</a>
        <a href="#" class="hover:text-primary px-3 pb-3 "></a>
        <a href="#" class="hover:text-primary px-3 pb-3">Accessories</a>
      </div>
      <div class="md:flex justify-between items-center   max-md:flex-col-reverse max-md:space-y-4">
        <div class="flex items-center space-x-2  max-md:w-full  justify-between">
          <div class="flex items-center space-x-2">
            <label for="sort" class="text-sm text-gray-600 text-nowrap pr-2">Sort By:</label>
            <select id="sort" class="border border-gray-300 px-3 py-1 max-md:px-2 text-gray-700">
              <option value="default">Default</option>
              <option value="price-low-high ">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>

          <div>
            <div class="flex items-center space-x-2">
              <button class="p-2 border-1 hover:bg-slate-200 border-gray-300  bg-transparent">
                <!-- Grid View Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="">
                  <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
                </svg>
              </button>
              <button class="p-2 border bg-transparent  hover:bg-slate-200">
                <!-- List View Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="">
                  <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Heading and Sorting -->
    <!-- <div class="w-full flex items-center space-x-4 py-4 ">
      <h1 class="text-2xl font-semibold text-gray-800">MacBook</h1>
    </div> -->

    <!-- Product Grid -->
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: {
    Product,
  },
};
</script>
