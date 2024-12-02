<template>
    <div
      class="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style="background-image: url('https://via.placeholder.com/1920x1080');"
    >
      <div class="bg-white shadow-lg rounded-lg p-8 w-96">
        <div class="text-center mb-4">
          <button
            @click="$router.push('/')"
            class="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ← Back to Login
          </button>
          <h2 class="text-2xl font-bold text-gray-700 mt-2">បង្កើតគណនី</h2>
        </div>
  
        <form>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700">
                នាមខ្លួន
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="នាមខ្លួន"
                class="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700">
                នាមត្រកូល
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="នាមត្រកូល"
                class="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
  
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              អ៊ីមែល
            </label>
            <input
              type="email"
              id="email"
              placeholder="អ៊ីមែល"
              class="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
  
          <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-700">
              លេខទូរស័ព្ទ
            </label>
            <input
              type="text"
              id="phone"
              placeholder="លេខទូរស័ព្ទ"
              class="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
  
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">
              លេខសម្ងាត់
            </label>
            <input
              type="password"
              id="password"
              placeholder="លេខសម្ងាត់"
              class="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
  
          <div class="mb-4">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
              លេខសម្ងាត់បញ្ជាក់
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="លេខសម្ងាត់បញ្ជាក់"
              class="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
  
          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
          >
            ចុះឈ្មោះ
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Add any additional scoped styles if needed */
  </style>
  