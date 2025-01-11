<template>
  <nav class="flex justify-between items-center px-[100px] py-6 bg-white max-md:px-4">
    <!-- Logo -->
    <div class="flex items-center gap-4 justify-between w-full">
      <a href="#"><img src="../../public/images/logo_1.png" alt="GIC LOGO" class="h-12 max-md:h-10" /></a>
    </div>

    <div class="flex gap-2 items-center max-md:gap-0">
      <!-- Search Product  -->
      <div class="relative bg-darkBg px-4 rounded-full h-12 flex items-center  max-md:px-0 max-md:hidden max-md:bg-white">
        <v-text-field v-model="search" density="compact" label="Search Products" prepend-inner-icon="mdi-magnify"
          variant="solo-filled" flat hide-details single-line bg-color="null"
          class="custom-width custom-bg "></v-text-field>
      </div>
      <div v-if="search" class="absolute z-10 top-12 ">
    <v-card title="Search Results" flat class="absolute top-12">
      <!-- <v-data-table :items="desserts" :search="search"></v-data-table> -->
      <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>
    </v-card>
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

export default {
  data() {
    return {
      openCart: false,
      search: '',
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
      ],
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
import Cart from './BuyingProcess/Cart.vue';
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
  background-color: #f8fafc;
  /* Tailwind's slate-50 color */
  border-radius: 9999px;
  /* Tailwind's rounded-full */
}
</style>