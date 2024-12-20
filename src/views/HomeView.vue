<template>
  <div class="bg-gray-100 p-4">
    <header class="flex items-center justify-between py-4 px-8">
      <img src="" alt="Logo" class="h-8">
      <div class="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search Product"
          class="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.25 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zm0 0l7.5 7.5"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 17h5l-1.405 3.34A2 2 0 0116.694 22H7.306a2 2 0 01-1.902-1.34L4 17h5m0 0V9a6 6 0 1112 0v8z"
            />
          </svg>
        </button>
      </div>
    </header>
    <main class="relative bg-white rounded-lg shadow-md overflow-hidden">
      <div class="flex items-center justify-center p-8">
        <div>
          <h1 class="text-3xl font-bold flex items-center space-x-2">
            <span>🍎</span>
            <span>MacBook Air</span>
          </h1>
          <p class="text-lg mt-2 text-gray-600">
            The <span class="font-semibold">ultimate</span> pro laptop.
          </p>
        </div>
        <img
          src=""
          alt="MacBook Air"
          class="h-40 ml-8"
        />
      </div>
      <div class="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-4">
        <span class="h-2 w-2 bg-gray-300 rounded-full"></span>
        <span class="h-2 w-2 bg-blue-500 rounded-full"></span>
        <span class="h-2 w-2 bg-gray-300 rounded-full"></span>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "MacBookBanner",
};
</script>

<style>
/* Add any additional custom styles here */
</style>
