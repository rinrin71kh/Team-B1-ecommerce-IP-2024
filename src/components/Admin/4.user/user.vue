<template>
  <div class="mt-[60px] ml-[285px] w-[1260px] h-[650px] bg-white px-8 py-4 text-black overflow-hidden kantumruy-pro-regular">
    <div class="px-0 py- flex flex-row items-center justify-between border-b border-zinc-300 w-full mb-0">
      <ul class="flex flex-row">
        <li>
          <span><img src="/icon/home.svg" /></span>អ្នកប្រើប្រាស់ 
        </li>
      </ul>
      <div class="flex flex-row relative mb-2">
        <img class="relative left-8" src="/icon/Search.svg" />
        <input placeholder="ស្វែងរក" class="w-60 pl-12 h-11 rounded-lg border-2 hadow-sm focus:shadow-md focus:border-zinc-500">
        <button
          class="bg-transparent flex items-center justify-center p-2 w-10 h-10 absolute right-2 hover:bg-[#64748B]"
          @click="toggleSidebar"
        >
          <img class="w-6 h-6 bg-gray-200" src="/icon/Grid.svg" />
        </button>
      </div>
    </div>
    <div>
      <table class="table-auto w-full border-collapse border-t-0 border-gray-300">
        <thead class="">
          <tr class="bg-white ">
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">ល.រ</th>
            <th class="border-t-0 border-b border-gray-400 pl-4 pr-80 py-4 text-start font-medium">ឈ្មោះ</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">ទំនាក់ទំនង</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">ស្ថានភាព</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">ស្ថានភាពចុងក្រោយ</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">ចំនួនវិក្ក័យបត្រ</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">តម្លៃលក់(រៀល)</th>
          </tr>
        </thead>
        <tbody class="text-gray-500">
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">1</td>
            <td class=" border-gray-400 px-0 py-2 text-center flex flex-row items-center">
              <img class="w-14" src="/macbook/Screenshot from 2024-11-17 14-37-36.png" alt="">
              <div class="px-2">
                <div class="flex flex-col">
                  <p>ឡេង សុខឆាយ</p>
                  <p class="text-sm">អភិបាលប្រព័ន្ធ</p>
                </div>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">
              <div class="flex flex-col">
                <p>0998889999</p>
                <p>lengsokchhay@gmail.com</p>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 py-2 text-center px-8">
              <div
                @click="toggle"
                :class="isActive ? 'bg-blue-500' : 'bg-gray-300'"
                class="relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300"
              >
                <div
                  :class="isActive ? 'translate-x-6' : 'translate-x-0'"
                  class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300"
              >
              </div>
            </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">
              <div class="flex flex-row">
                <p>12-12-2024</p>
                <p>19:24</p>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">151</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">
              <div class="flex flex-row items-center">
                100,00 (រៀល)
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
              </div>
            </td>
          </tr>
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">2</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center flex flex-row items-center">
              <img class="w-14" src="/macbook/studio-display-digitalmat-gallery-1-202203.png" alt="">
              <div class="px-2">
                <div class="flex flex-col">
                  <p>គ្រីន​ បូវេន</p>
                  <p class="text-sm">អ្នកគិតប្រាក់</p>
                </div>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">
              <div class="flex flex-col">
                <p>0998889999</p>
                <p>lengsokchhay@gmail.com</p>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 py-2 text-center px-8">
              <div
                @click="toggle"
                :class="isActive ? 'bg-blue-500' : 'bg-gray-300'"
                class="relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300"
              >
                <div
                  :class="isActive ? 'translate-x-6' : 'translate-x-0'"
                  class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300"
              >
              </div>
            </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">
              <div class="flex flex-row">
                <p>12-12-2024</p>
                <p>19:24</p>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">151</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">
              <div class="flex flex-row items-center">
                100,00 (រៀល)
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      v-if="isSidebarVisible"
      class="fixed top-0 right-0 w-[500px] h-full z-50 bg-gray-100 shadow-lg border-l border-gray-300"
    >
      <div class="px-4 py-1 border-b border-black">
        <h2 class="text-2xl font-bold mb-4 mt-2">ស្វែងរកវិក្ក័យបត្រ</h2>
      </div>
      <button
        @click="toggleSidebar"
        class="absolute top-0 right-2 bg-gray-100 text-3xl text-black hover:text-gray-700"
      >
        x
      </button>
      <div class=" px-2 my-6">
      <div class="relative">
        <label for="options" class="absolute top-[-10px] text-sm left-0 px-4 text-gray-700">ពេលវេលា</label>
        <select id="options" name="options" class="mt-6 block w-full px-4 py-5 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700">
          <option value="option1">ថ្ងៃនេះ</option>
          <option value="option2">ថងsdfghjk</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
      </div>
      <select id="options" name="options" class="mb-4 mt-6 block w-full px-4 py-5 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700">
        <option value="option1">តួនាទី</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
        <button class="bg-[#254061] ml-[80%] rounded-lg px-4 mt-០">
          ស្វែងរក
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sale",
  data() {
    return {
      isSidebarVisible: false,
      items: [
        {
          id: 1,
          invoice: "618724",
          amount: "251,000",
          date: "12-12-2024",
          time: "09:12 AM",
        },
        // Add more dummy data if needed
      ],
    };
  },
    methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  },
};

</script>

<style scoped>
/* Your styles go here */
</style>
