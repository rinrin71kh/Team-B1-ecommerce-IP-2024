<template>
  <nav class="flex justify-between items-center px-[100px] py-6 bg-white  max-md:px-4 ">
    <!-- Logo -->
    <div class="flex items-center gap-4 justify-between w-full">
      <a href="#"><img src="../../public/images/logo_1.png" alt="GIC LOGO" class="h-12 max-md:h-10" /></a>
      
    </div>

    <div class="flex ">

      <!-- Search Product  -->
      <div class="bg-darkBg px-4 rounded-full h-12 flex items-center bg-slate-50 max-md:px-0 max-md:bg-white">
        <input type="text" placeholder="Search Product"
          class=" h-full w-full border-none focus:outline-none bg-transparent max-md:hidden " />
        <span class="ml-2">
            <div class="h-12 w-12 flex items-center justify-center hover:bg-darkBg rounded-full ">  
              <img src="/public/icon/Search.svg" alt="Search" class="size-6 " />
            </div>
          </span>
      </div>

      <!-- User -->
      
      <div class="h-12 w-12 flex items-center justify-center hover:bg-slate-50 rounded-full ">
        <img src="/public/icon/user-circle.svg" alt="User" class="size-6" />
      </div>

      <!-- Cart -->
      <div class="h-12 w-12 flex items-center justify-center hover:bg-slate-50 rounded-full ">
        <img src="/public/icon/shopping-cart.svg" alt="Cart" class="size-6" @click="toggleOn" />
      </div>

    </div>
  </nav>
  <div v-if="openCart">
    <Cart />
  </div>
</template>

<script>
export default {
  data() {
    return {
      openCart: false
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
import Cart from './Cart.vue';
</script>
