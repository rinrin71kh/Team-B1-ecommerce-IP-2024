<template>
  <div class="flex bg-slate-950">
    <!-- Sidebar -->
    <aside class="fixed top-0 left-0 w-[280px] h-screen bg-[#254061] text-white z-20 flex flex-col">
      <img src="/icon/eye.svg" class="w-10 h-10" />
      <ul class="mt-[100px] space-y-4 p-6">
        <li>
          <router-link to="/admin/dashboard" class="font-semibold hover:bg-[#64748B] p-2 cursor-pointer text-[#CBD5E1] flex items-center w-[100%]">
            <span><img src="/icon/eye.svg" /></span>ផ្ទាំងព័ត៍មាន
          </router-link>
        </li>

        <li>
          <router-link to="/admin/sale" class="font-semibold hover:bg-[#64748B] p-2 cursor-pointer text-[#CBD5E1] flex items-center w-[100%]">
            <span><img src="/icon/eye.svg" /></span>ការលក់
          </router-link>
        </li>

        <li>
          <div class="flex-col w-[100%]">
            <div
              class="font-semibold hover:bg-[#64748B] p-2 cursor-pointer flex flex-row text-[#CBD5E1]"
              @click="toggleProduct"
            >
              <span><img src="/icon/eye.svg" /></span>ផលិតផល
              <span class="text-sm ml-24">{{ isProductOpen ? '▲' : '▼' }}</span>
            </div>
            <ul v-if="isProductOpen" class="ml-4 mt-2 space-y-2 rounded-md p-2">
              <li>
                <router-link to="/admin/product/all" class="font-semibold hover:bg-[#64748B] p-2 cursor-pointer text-[#CBD5E1] flex items-center w-[100%]">
                  <span><img src="/icon/eye.svg" /></span>ទាំងអស់
                </router-link>
              </li>
              <li>
                <router-link to="/admin/product/type" class="font-semibold hover:bg-[#64748B] p-2 cursor-pointer text-[#CBD5E1] flex items-center w-[100%]">
                  <span><img src="/icon/eye.svg" /></span>ប្រភេទ
                </router-link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <router-link to="/admin/user" class="font-semibold hover:bg-[#64748B] p-2 cursor-pointer text-[#CBD5E1] flex items-center w-[100%]">
            <span><img src="/icon/eye.svg" /></span>អ្នកប្រើប្រាស់
          </router-link>
        </li>

        <li>
          <router-link to="/admin/account" class="font-semibold hover:bg-[#64748B] p-2 cursor-pointer text-[#CBD5E1] flex items-center w-[100%]">
            <span><img src="/icon/eye.svg" /></span>គណនីយ
          </router-link>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 ml-[300px]">
      <!-- Header -->
      <header class="fixed top-0 left-[280px] w-[calc(100%-280px)] text-black h-[80px] bg-white shadow-md flex items-center justify-between z-10 px-6 py-8">
        <h1 class="text-2xl font-bold">អភិបាលប្រព័ន្ធ</h1>
        <div class="flex flex-row justify-between w-[20%]">
          <!-- Replace repeated icons with a single set of icons -->
          <img src="/icon/eye.svg" />
          <img src="/icon/eye.svg" />
          <img src="/icon/eye.svg" />
          <img src="/icon/eye.svg" />
          <img src="/icon/eye.svg" />
        </div>
      </header>
    </div>
  </div>


    <router-view></router-view>



</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isProductOpen: false, // Manage Product dropdown visibility
    };
  },
  methods: {
    toggleProduct() {
      this.isProductOpen = !this.isProductOpen;
    },
  },
};
</script>

<style scoped>
/* Optional global styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
