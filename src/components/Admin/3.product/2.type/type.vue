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
          ប្រភេទ
        </li>
      </ul>
      <div class="flex flex-row relative mb-2">
        <img class="relative left-8" src="/icon/Search.svg" />
        <input placeholder="ស្វែងរក" class="w-60 pl-12 h-11 rounded-lg border-2 hadow-sm focus:shadow-md focus:border-zinc-500">
        <button class="bg-transparent flex items-center justify-center p-2 w-10 h-10 absolute right-2 hover:bg-[#64748B]">
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
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">ផលិតផល</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">កាលបរិច្ឆេទ</th>
          </tr>
        </thead>
        <tbody class="text-gray-500">
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">1</td>
            <td class="border-t border-b border-gray-400 px-0 py-4 text-center">
              <div class="flex flex-row items-center">
                <img class="w-8" src="/icon/mdi_view-dashboard-outline.svg" alt="">
                <p class="ml-2">Beauty</p>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">4</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-0 text-center">
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
            </td>
          </tr>
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">2</td>
            <td class="border-t border-b border-gray-400 px-0 py-4 text-center">
              <div class="flex flex-row items-center">
                <img class="w-8" src="/icon/Search.svg" alt="">
                <p class="ml-2">Beauty</p>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">4</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-0 text-center">
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
            </td>
          </tr>
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">3</td>
            <td class="border-t border-b border-gray-400 px-0 py-4 text-center">
              <div class="flex flex-row items-center">
                <img class="w-8" src="/icon/shopping-bag.svg" alt="">
                <p class="ml-2">Beauty</p>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">4</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-0 text-center">
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
            </td>
          </tr>
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">4</td>
            <td class="border-t border-b border-gray-400 px-0 py-4 text-center">
              <div class="flex flex-row items-center">
                <img class="w-8" src="/icon/star.svg" alt="">
                <p class="ml-2">Beauty</p>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">4</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-0 text-center">
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
            </td>
          </tr>
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">5</td>
            <td class="border-t border-b border-gray-400 px-0 py-4 text-center">
              <div class="flex flex-row items-center">
                <img class="w-8" src="/icon/user-plus.svg" alt="">
                <p class="ml-2">Beauty</p>
              </div>
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">4</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-0 text-center">
                <button class="bg-white">
                  <img src="/icon/minus.svg" alt="">
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "sale",
};
</script>

<style scoped>
/* Your styles go here */
</style>
