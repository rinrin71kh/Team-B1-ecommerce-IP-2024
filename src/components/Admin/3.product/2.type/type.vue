<template>
  <div class="mt-[80px] ml-[285px] w-[1260px] h-[650px] p-8 bg-gray-200 text-black overflow-hidden">
    <div class="px-4 py-4 flex flex-row items-center justify-between border-b border-zinc-300 w-full mb-6">
      <ul>
        <li>
          <span><img src="/icon/eye.svg" /></span>ផលិតផល
        </li>
      </ul>
      <div class="flex flex-row relative">
        <img class="relative left-8" src="/icon/eye.svg" />
        <input placeholder="ស្វែងរក" class="w-60 pl-12 h-10 rounded-md border-zinc-300 hadow-sm focus:shadow-md focus:border-zinc-500">
        <button class="bg-transparent flex items-center justify-center p-2 w-10 h-10 absolute right-2 hover:bg-[#64748B]">
          <img class="w-6 h-6 bg-gray-200" src="/icon/eye.svg" />
        </button>
      </div>
    </div>
    <div>
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="">
          <tr class="bg-gray-100">
            <th class="border-t border-b border-gray-400 px-4 py-4">ល.រ</th>
            <th class="border-t border-b border-gray-400 pl-4 pr-80 py-4 text-start">ឈ្មោះ</th>
            <th class="border-t border-b border-gray-400 px-4 py-4">ផលិតផល</th>
            <th class="border-t border-b border-gray-400 px-4 py-4">កាលបរិច្ឆេទ</th>
          </tr>
        </thead>
        <tbody class="text-gray-500">
          <tr class="">
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">1</td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center text-start flex flex-row">
              <img class="mr-4" src="/icon/eye.svg" />
              <p>Beauty</p>
            </td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">2</td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">12-12-2024</td>
          </tr>
          <tr class="">
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">1</td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center text-start flex flex-row">
              <img class="mr-4" src="/icon/eye.svg" />
              <p>Beauty</p>
            </td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">2</td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">12-12-2024</td>
          </tr>
          <tr class="">
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">1</td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center text-start flex flex-row">
              <img class="mr-4" src="/icon/eye.svg" />
              <p>Beauty</p>
            </td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">2</td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">12-12-2024</td>
          </tr>
          <tr class="">
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">1</td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center text-start flex flex-row">
              <img class="mr-4" src="/icon/eye.svg" />
              <p>Beauty</p>
            </td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">2</td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">12-12-2024</td>
          </tr>
          <tr class="">
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">1</td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center text-start flex flex-row">
              <img class="mr-4" src="/icon/eye.svg" />
              <p>Beauty</p>
            </td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">2</td>
            <td class="border-t border-b border-gray-400 px-4 py-4 text-center">12-12-2024</td>
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
