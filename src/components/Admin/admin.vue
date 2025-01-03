<template>
  <div class="flex bg-white min-h-screen">
    <!-- Sidebar -->
    <aside class="fixed top-0 left-0 w-72 h-screen bg-[#254061] text-white z-20 flex flex-col">
      <img src="/images/logo.png" alt="Logo" class="w-40 h-20 mx-auto mt-4" />
      <ul class="mt-10 space-y-4 px-6">
        <li>
          <router-link to="/admin/dashboard" class="sidebar-link">
            <span><img src="/icon/bars-3.svg" alt="Dashboard Icon" class="icon" /></span> ផ្ទាំងព័ត៍មាន
          </router-link>
        </li>
        <li>
          <router-link to="/admin/sale" class="sidebar-link">
            <span><img src="/icon/shopping-cart.svg" alt="Sale Icon" class="icon text-slate-200" /></span> ការលក់
          </router-link>
        </li>
        <li>
          <div class="flex-col w-full">
            <div
              class="sidebar-link flex justify-between items-center"
              @click="toggleProduct"
              role="button"
              aria-expanded="false"
            >
              <span class="flex items-center">
                <img src="/icon/Grid.svg" alt="Product Icon" class="icon" /> ផលិតផល
              </span>
              <span class="text-sm">{{ isProductOpen ? '▲' : '▼' }}</span>
            </div>
            <ul v-if="isProductOpen" class="ml-6 mt-2 space-y-2 rounded-md">
              <li>
                <router-link to="/admin/product/all" class="sub-link">
                  <span>ទាំងអស់</span> 
                </router-link>
              </li>
              <li>
                <router-link to="/admin/product/type" class="sub-link">
                  <span>ប្រភេទ</span> 
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <router-link to="/admin/user" class="sidebar-link">
            <span><img src="/icon/user-circle.svg" alt="User Icon" class="icon" /></span> អ្នកប្រើប្រាស់
          </router-link>
        </li>
        <li>
          <router-link to="/admin/account" class="sidebar-link">
            <span><img src="/icon/user-circle.svg" alt="Account Icon" class="icon" /></span> គណនីយ
          </router-link>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 ml-72">
      <!-- Navigation Bar -->
      <nav class="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">អភិបាលប្រព័ន្ធ</h1>
        <div class="flex items-center space-x-4">
          <img src="/icon/eye.svg" alt="Icon" class="w-6 h-6" />
          <img src="/icon/eye.svg" alt="Icon" class="w-6 h-6" />
          <img src="/icon/eye.svg" alt="Icon" class="w-6 h-6" />
          <img src="/icon/eye.svg" alt="Icon" class="w-6 h-6" />
          <img src="/icon/eye.svg" alt="Icon" class="w-6 h-6" />
        </div>
      </nav>

      <!-- Main Content Area -->
      <div class="p-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isProductOpen: false, 
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
.icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  text-decoration: none;
  color: #cbd5e1;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.sidebar-link:hover {
  background-color: #64748b;
}

.sub-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  color: #cbd5e1;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;
}

.sub-link:hover {
  background-color: #64748b;
}
</style>
