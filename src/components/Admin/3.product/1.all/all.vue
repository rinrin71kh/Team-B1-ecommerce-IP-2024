<template>
  <div class="p-6 bg-white rounded-lg shadow-md">

    <div class="flex items-center justify-between border-b pb-4 mb-4">
      <h2 class="text-2xl font-semibold">ផលិតផលទាំងអស់</h2>
      <input
        type="text"
        placeholder="ស្វែងរក..."
        class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

 
    <table class="w-full border-collapse text-gray-700">
      <thead>
        <tr class="bg-gray-100 text-gray-800">
          <th class="border border-gray-300 px-4 py-2 text-center w-16">ល.រ</th>
          <th class="border border-gray-300 px-4 py-2 text-left">ឈ្មោះផលិតផល</th>
          <th class="border border-gray-300 px-4 py-2 text-right w-24">តម្លៃ (៛)</th>
          <th class="border border-gray-300 px-4 py-2 text-right w-24">បរិមាណ</th>
          <th class="border border-gray-300 px-4 py-2 text-right w-32">សរុបតម្លៃ (៛)</th>
          <th class="border border-gray-300 px-4 py-2 text-center w-32">កាលបរិច្ឆេទ</th>
          <th class="border border-gray-300 px-4 py-2 text-center w-24">បុគ្គលិក</th>
        </tr>
      </thead>
      <tbody>
      
        <tr>
          <td colspan="7" class="text-center py-6 text-gray-500">គ្មានទិន្នន័យ</td>
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
    };
  },
};
</script>

<style scoped>

</style>
