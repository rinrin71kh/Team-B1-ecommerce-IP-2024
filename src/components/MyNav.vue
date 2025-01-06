<template>
  <nav class="flex justify-between items-center px-[100px] py-6 bg-white max-md:px-4">
    <!-- Logo -->
    <div class="flex items-center gap-4 justify-between w-full">
      <a href="#"><img src="../../public/images/logo_1.png" alt="GIC LOGO" class="h-12 max-md:h-10" /></a>
    </div>

    <div class="flex gap-2 items-center max-md:gap-0">
      <!-- Search Product  -->
      <div class="bg-darkBg px-4 rounded-full h-12 flex items-center  max-md:px-0 max-md:hidden max-md:bg-white">
        <v-text-field v-model="search" density="compact" label="Search Products" prepend-inner-icon="mdi-magnify"
          variant="solo-filled" flat hide-details single-line bg-color="null" class="custom-width custom-bg "></v-text-field>
      </div>

      <!-- User -->
      <v-btn icon class="custom-btn">
        <img src="/public/icon/user-circle.svg" alt="User" class="size-6" />
      </v-btn>

      <!-- Cart -->
      <v-btn icon class="custom-btn">
        <img src="/public/icon/shopping-cart.svg" alt="Cart" class="size-6" @click="toggleOn" />
      </v-btn>
    </div>
  </nav>
  <div v-if="openCart">
    <Cart />
  </div>
</template>

<script>
import Cart from './Cart.vue';

export default {
  data() {
    return {
      openCart: false,
      search: ''
    }
  },
  components: {
    Cart
  },
  methods: {
    toggleOn() {
      this.openCart = !this.openCart;
    }
  }
};
</script>

<style scoped>
.custom-btn {
  background-color: transparent !important;
  box-shadow: none !important;
}

.custom-btn:hover {
  background-color: transparent !important;
}

.custom-width {
  width: 300px;
}

.custom-bg {
  background-color: #f8fafc; /* Tailwind's slate-50 color */
  border-radius: 9999px; /* Tailwind's rounded-full */
}
</style>