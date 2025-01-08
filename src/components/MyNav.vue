<template>
  <nav class="flex justify-between items-center px-[100px] py-6 bg-white max-md:px-4">
    <!-- Logo -->
    <div class="flex items-center gap-4 justify-between w-full">
      <a href="/"><img src="../../public/images/logo_1.png" alt="GIC LOGO" class="h-12 max-md:h-10" /></a>
    </div>

    <div class="flex gap-2 items-center max-md:gap-0">
      <!-- Search Product -->
      <div class="relative bg-darkBg px-4 rounded-full h-12 flex items-center max-md:px-0 max-md:hidden max-md:bg-white">
        <v-text-field
          v-model="search"
          density="compact"
          label="Search Products"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
          bg-color="null"
          class="custom-width custom-bg"
        ></v-text-field>
      </div>

      <!-- User -->
      <v-btn icon class="custom-btn">
        <img src="/public/icon/user-circle.svg" alt="User" class="size-6" />
      </v-btn>

      <!-- Cart -->
      <v-btn icon class="custom-btn" @click="dialog = true">
        <img src="/public/icon/shopping-cart.svg" alt="Cart" class="size-6" />
        <div v-if="store.sharedValue != 0"  > 
          <sup class="p-1 bg-red-500 text-white rounded-full ">{{store.sharedValue}}</sup>
        </div>
      </v-btn>

      <!-- Cart Dialog -->
      <v-dialog v-model="dialog" max-width="500">
        <template v-slot:activator="{ props }"></template>
        <v-card>
          <v-card-title class="text-h6">Your Cart</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <Cart/>
            <v-btn color="primary" class="mt-2" block @click="checkout">
                  Proceed to Checkout
                </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn text block @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </nav>
</template>

<script>
import router from '@/router';
import Cart from './BuyingProcess/Cart.vue';
import { useNotifyStore } from '@/stores/cartStore';

export default {
  data() {
    return {
      dialog: false,
      store : useNotifyStore(),
      search: '',
      cartItems: [
        { name: 'Product 1', price: 50, quantity: 1 },
        { name: 'Product 2', price: 30, quantity: 2 },
      ],
    };
  },
  components: {
    Cart,
  },
  computed: {
    totalAmount() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
    checkout() {
      this.$router.push('/checkout');
      this.dialog = false;
    },
  },
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
  background-color: #f8fafc;
  border-radius: 9999px;
}
</style>
