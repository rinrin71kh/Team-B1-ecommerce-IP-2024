<template>
  <div class="mt-[60px] ml-[285px] w-[1260px] h-[650px] bg-white px-8 py-4 text-black overflow-hidden kantumruy-pro-regular">
    <div class="px-0 py- flex flex-row items-center justify-between border-b border-zinc-300 w-full mb-0">
      <ul>
        <li>
          <span><img src="/icon/home.svg" /></span>ការលក់
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
            <th class="border-t-0 border-b border-gray-400 pl-4 pr-80 py-4 text-start font-medium">វិក្ក័យបត្រ</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">តម្លៃលក់(រៀល)</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">កាលបរិច្ឆេទ</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">ម៉ោង</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">តាមរយះ</th>
            <th class="border-t-0 border-b border-gray-400 px-4 py-4 font-medium">អ្នកគិតប្រាក់</th>
          </tr>
        </thead>
        <tbody class="text-gray-500">
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">1</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-start">618724</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">251,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">09:12 AM</td>
            <td class="border-t-0 border-b-0 border-gray-400 px-0 py-2 text-center flex justify-center ">
              <img class="w-8 h-10" src="/icon/mdi_cellphone.svg" alt="">
            </td>
            <td class="border-t border-b border-gray-400 px-0 py-0 text-center">
              <div class="flex flex-row justify-center items-center">
                <img class="w-10 h-10 rounded-full ml-8 mr-4" src="/Signin.jpg" alt="">
                <button class="bg-white ">
                  <img src="/icon/minus.svg" alt="" @click="togglePopup">
                  <div v-if="isPopupVisible" class="absolute right-20 bg-white border border-gray-300 rounded-md p-2 text-gray-700 w-40 mt-2 flex flex-col">
                    <div class="flex flex-row items-center px-2">
                      <img class="w-8 h-10 mr-4" src="/icon/mdi_cellphone.svg" alt="">
                      <p>មើល</p>
                    </div>
                    <div class="flex flex-row items-center px-2">
                      <img class="w-8 h-10 mr-4" src="/icon/mdi_cellphone.svg" alt="">
                      <p>ទាញយក</p>
                    </div>
                    <div class="flex flex-row items-center px-2">
                      <img class="w-8 h-10 mr-4" src="/icon/mdi_cellphone.svg" alt="">
                      <p>លុប</p>
                    </div>
                  </div>
                </button>
              </div>
            </td>
          </tr>
          <tr class="p-0">
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">2</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-start">34578</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">90,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">30-11-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">09:12 AM</td>
            <td class="border-t border-b-0 border-gray-400 px-0 py-2 text-center flex justify-center ">
              <img class="w-8 h-10" src="/icon/Phone.svg" alt="">
            </td>
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
            <td class="border-t border-b border-gray-400 px-0 py-2 text-start ">62354724</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">250,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-02-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">09:13 AM</td>
            <td class="border-t border-b-0 border-gray-400 px-0 py-2 text-center flex justify-center ">
              <img class="w-8 h-10" src="/icon/Apple.svg" alt="">
            </td>
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
            <td class="border-t border-b border-gray-400 px-0 py-2 text-start">618724</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">251,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">12-12-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">09:12 AM</td>
            <td class="border-t border-b-0 border-gray-400 px-0 py-2 text-center flex justify-center ">
              <img class="w-8 h-10" src="/icon/mdi_cellphone.svg" alt="">
            </td>
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
            <td class="border-t border-b border-gray-400 px-0 py-2 text-start">98765</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">91,000</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">01-01-2024</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center">01:00 AM</td>
            <td class="border-t border-b border-gray-400 px-0 py-2 text-center flex justify-center ">
              <img class="w-8 h-10" src="/icon/mdi_cellphone.svg" alt="">
            </td>
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
        <option value="option1">អ្នកគិតប្រាក់</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
      <div class="flex flex-row">
        <button class="w-[50%] px-4 py-4 bg-white text-black rounded-l-full border-2 border-black hover:bg-blue-600">
          តាមរយះទូរស័ព្ទ
        </button>
        <button class="w-[50%] px-4 py-4 text-black bg-white rounded-r-full border-2 border-black hover:bg-blue-600">
          តាមរយះកុំព្យូទ័រ
        </button>
      </div>
        <button class="bg-[#254061] ml-[80%] rounded-lg px-4 mt-8">
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
      isPopupVisible: false, // Added a data property for the popup visibility
      items: [
        {
          id: 1,
          invoice: "618724",
          amount: "251,000",
          date: "12-12-2024",
          time: "09:12 AM",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    togglePopup() {
      this.isPopupVisible = !this.isPopupVisible; // Toggle popup visibility
    },
  },
};
</script>


<style scoped>
/* Your styles go here */
</style>
