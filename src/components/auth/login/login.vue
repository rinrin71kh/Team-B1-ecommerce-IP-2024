<template>
    <div
      class="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style="background-image: url('https://via.placeholder.com/1920x1080');"
    >
      <div class="bg-white shadow-lg rounded-lg p-8 w-96">
        <div class="text-center">
          <img
            src="https://via.placeholder.com/150x50"
            alt="GIC Logo"
            class="mx-auto mb-4"
          />
        </div>
        <form>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div class="relative mt-1">
              <input
                type="email"
                id="email"
                placeholder="Email"
                class="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <span class="absolute inset-y-0 right-3 flex items-center text-gray-400">
                📧
              </span>
            </div>
          </div>
  
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="relative mt-1">
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <span class="absolute inset-y-0 right-3 flex items-center text-gray-400">
                👁️
              </span>
            </div>
          </div>
  
          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
  
          <div class="my-4 text-center text-sm text-gray-500">or</div>
  
          <button
            type="button"
            class="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            <span class="mr-2">🌐</span> Sign in with Google
          </button>
  
          <button
            type="button"
            class="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 mt-3 text-gray-700 hover:bg-gray-100 transition"
          >
            <span class="mr-2">📘</span> Sign in with Facebook
          </button>
  
          <div class="mt-4 text-center">
            <span class="text-gray-500">មិនមានគណនី?</span>
            <a
                href="#"
                @click.prevent="$router.push('/register')"
                class="text-blue-600 hover:underline"
            >
                ចុះឈ្មោះ
            </a>
            </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* You can replace the placeholder background image URL with your own */
  </style>
  