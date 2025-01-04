<template>
  <div class="mt-[60px] ml-[285px] w-[1260px] h-[650px] bg-white px-8 py-4 bg-gray-200 text-black overflow-hidden kantumruy-pro-regular">
    <div class="px-0 py- flex flex-row items-center justify-between border-b border-zinc-300 w-full mb-0">
      <ul class="flex flex-row">
        <li>
          <span><img src="/icon/home.svg" /></span>ផលិតផល
        </li>
        <li class="flex flex-row">
          <span class="ml-4">
            <img class="w-5" src="/icon/chevron-right.svg" /> 
          </span>
          ទាំងអស់
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
            <th class="border-t-0 border-b border-gray-400 pl-4 pr-80 py-4 text-start font-medium">ផលិតផល</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">តម្លៃ(រៀល)</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">ចំនួនលក់</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">តម្លៃលក់(រៀល)</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">កាលបរិច្ឆេទ</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">បញ្ចូលទិន្នន័យ</th>
          </tr>
        </thead>
        <tbody class="text-gray-500">
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">1</td>
            <td class=" border-gray-400 px-0 py-2 text-center flex flex-row">
              <img class="w-14" src="/macbook/Screenshot from 2024-11-17 14-37-36.png" alt="">
              <div class="px-">
                <p class="text-black">Studio Display</p>
                <div class="flex flex-row text-sm"> 
                  <p>Bv0001</p>
                  <span class="mx-1">|</span>
                  <p>Beverage</p>
                </div>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">251,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">121</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">80,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-0 text-center">
              <div class="flex flex-row justify-center items-center">
                <img class="w-10 h-10 rounded-full ml-8 mr-4" src="/Signin.jpg" alt="">
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
              </div>
            </td>
          </tr>
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">2</td>
            <td class="border-t border-gray-400 px-0 py-2 text-center flex flex-row">
              <img class="w-14" src="/macbook/mac-mini-digitalmat-gallery-3-202410.png" alt="">
              <div class="px-2">
                <p class="text-black">Studio Display</p>
                <div class="flex flex-row text-sm"> 
                  <p>Bv0001</p>
                  <span class="mx-1">|</span>
                  <p>Beverage</p>
                </div>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">251,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">121</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">80,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-0 text-center">
              <div class="flex flex-row justify-center items-center">
                <img class="w-10 h-10 rounded-full ml-8 mr-4" src="/Signin.jpg" alt="">
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
              </div>
            </td>
          </tr>
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">3</td>
            <td class="border-t border-gray-400 px-0 py-2 text-center flex flex-row">
              <img class="w-14" src="/macbook/mac-pro-digitalmat-gallery-1-202306.jfif" alt="">
              <div class="px-2">
                <p class="text-black">Studio Display</p>
                <div class="flex flex-row text-sm"> 
                  <p>Bv0001</p>
                  <span class="mx-1">|</span>
                  <p>Beverage</p>
                </div>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">251,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">121</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">80,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-0 text-center">
              <div class="flex flex-row justify-center items-center">
                <img class="w-10 h-10 rounded-full ml-8 mr-4" src="/Signin.jpg" alt="">
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
              </div>
            </td>
          </tr>
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">4</td>
            <td class="border-t border-gray-400 px-0 py-2 text-center flex flex-row">
              <img class="w-14" src="/macbook/imac-digitalmat-gallery-2-202410.png" alt="">
              <div class="px-2">
                <p class="text-black">Studio Display</p>
                <div class="flex flex-row text-sm"> 
                  <p>Bv0001</p>
                  <span class="mx-1">|</span>
                  <p>Beverage</p>
                </div>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">251,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">121</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">80,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-0 text-center">
              <div class="flex flex-row justify-center items-center">
                <img class="w-10 h-10 rounded-full ml-8 mr-4" src="/Signin.jpg" alt="">
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
              </div>
            </td>
          </tr>
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">5</td>
            <td class="border-t border-gray-400 px-0 py-2 text-center flex flex-row">
              <img class="w-14" src="/macbook/mba13-midnight-config-202402.jfif" alt="">
              <div class="px-2">
                <p class="text-black">Studio Display</p>
                <div class="flex flex-row text-sm"> 
                  <p>Bv0001</p>
                  <span class="mx-1">|</span>
                  <p>Beverage</p>
                </div>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">251,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">121</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">80,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-0 text-center">
              <div class="flex flex-row justify-center items-center">
                <img class="w-10 h-10 rounded-full ml-8 mr-4" src="/Signin.jpg" alt="">
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
              </div>
            </td>
          </tr>
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">6</td>
            <td class="border-b border-t border-gray-400 px-0 py-2 text-center flex flex-row">
              <img class="w-14" src="/macbook/Screenshot from 2024-11-17 14-37-36.png" alt="">
              <div class="px-">
                <p class="text-black">Studio Display</p>
                <div class="flex flex-row text-sm"> 
                  <p>Bv0001</p>
                  <span class="mx-1">|</span>
                  <p>Beverage</p>
                </div>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">251,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">121</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">80,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-0 text-center">
              <div class="flex flex-row justify-center items-center">
                <img class="w-10 h-10 rounded-full ml-8 mr-4" src="/Signin.jpg" alt="">
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
         <!-- Sidebar -->
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
        <option value="option1">ប្រភេទផលិតផល</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
      <select id="options" name="options" class="mb-4 mt-6 block w-full px-4 py-5 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700">
        <option value="option1">អ្នកបញ្ចូលទិន្នន័យ</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
        <button class="bg-[#254061] ml-[80%] rounded-lg px-4 mt-8">
          ស្វែងរក
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "all",
  data() {
    return {
      isSidebarVisible: false,
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

</style>
