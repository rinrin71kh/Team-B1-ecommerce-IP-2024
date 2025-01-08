<template>
  <nav class="flex justify-between items-center px-[100px] py-6 bg-white max-md:px-4">
    <!-- Logo -->
    <div class="flex items-center gap-4 justify-between w-full">
      <a href="/"><img src="../../public/images/logo_1.png" alt="GIC LOGO" class="h-12 max-md:h-10" /></a>
    </div>

    <!-- <div class="flex"> -->
      <!-- Search Product -->
      <div
        class="relative bg-darkBg px-4 rounded-full h-12 flex items-center max-md:px-0 max-md:w-2/4 max-md:bg-white">
        <!-- <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table> -->

        <v-text-field @click="handleSearchClick" density="compact" label="Search Products"
          prepend-inner-icon="mdi-magnify" variant="solo-filled" flat hide-details single-line bg-color="null"
          class="custom-width custom-bg"></v-text-field>
      </div>
      <v-dialog v-model="dialog1" max-width="1200">
        <v-card>
          <v-card-title class="flex align-center pe-2 mt-4">
              <v-icon icon="mdi-video-input-component"></v-icon> &nbsp;
              Find your products
              <v-spacer></v-spacer>

              <v-text-field class="mt-4 md:mt-0" v-model="search" density="compact" label="Search" prepend-inner-icon="mdi-magnify"
                variant="solo-filled" flat hide-details single-line></v-text-field>
            </v-card-title>

            <v-divider></v-divider>

          <v-card-text>
            <v-data-table v-model:search="search" :filter-keys="['productName']" :items="products">
              <template v-slot:item.productImage="{ item }">
                <v-card class="my-2" elevation="2" rounded>
                  <v-img 
                  :src="`${item.productImage}`"
                  class="aspect-square"
                    cover></v-img>
                </v-card>
              </template>
              <template v-slot:item.productName="{ item }">
                <div class="text-lg font-semibold">{{ item.productName }}</div>
              </template>
              <template v-slot:item.price="{ item }">
                <div class="text-lg text-danger-500 font-semibold whitespace-nowrap ">$ {{ formatPrice(item.price) }}</div>
              </template>

              <template v-slot:item.status="{ item }">
                <div class="text-center">
                  <v-chip :color="item.status ? 'green' : 'red'" :text="item.status ? 'In stock' : 'Out of stock'"
                    class="text-uppercase" size="small" label></v-chip>
                </div>
              </template>
              
            </v-data-table>
          </v-card-text>
          <v-card-actions>
            <v-btn text block @click="dialog1 = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- User -->
      <v-btn icon class="custom-btn">
        <img src="/public/icon/user-circle.svg" alt="User" class="size-6" />
      </v-btn>

      <!-- Cart -->
      <v-btn icon class="custom-btn" @click="dialog = true">
        <img src="/public/icon/shopping-cart.svg" alt="Cart" class="size-6" />
        <div v-if="store.sharedValue != 0">
          <sup class="p-1 bg-red-500 text-white rounded-full ">{{ store.sharedValue }}</sup>
        </div>
      </v-btn>

      <!-- Cart Dialog -->
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title class="text-h6">Your Cart</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <Cart />
            <v-btn color="primary" class="mt-2" block @click="checkout">
              Proceed to Checkout
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn text block @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    <!-- </div> -->
  </nav>

</template>

<script>
import Cart from './BuyingProcess/Cart.vue';
import { useNotifyStore } from '@/stores/cartStore';
import { FetchAllProduct } from '@/api/Fetch/fetchProductByID';
import { formatPrice } from '@/util';

export default {
  data() {
    return {
      dialog: false,
      dialog1: false,
      store: useNotifyStore(),
      search: '',
      url: 'https://techbox.developimpact.net',
      headers: [
        {
          align: 'start',
          key: 'name',
          sortable: false,
          title: 'Dessert (100g serving)',
        },
        { key: `proImage.link.href`, title: 'Calories' }, { key: 'basePrice', title: 'Price' },
        { key: 'carbs', title: 'Carbs (g)' },
        { key: 'protein', title: 'Protein (g)' },
        { key: 'iron', title: 'Iron (%)' },
      ],
      products: [
        // {
        //   name: 'KitKat',
        //   calories: 518,
        //   fat: 26.0,
        //   carbs: 65,
        //   protein: 7,
        //   iron: 6,
        // },
      ],
      items: [
          {
            name: 'Nebula GTX 3080',
            image: '1.png',
            price: 699.99,
            rating: 5,
            stock: true,
          },
          {
            name: 'Galaxy RTX 3080',
            image: '2.png',
            price: 799.99,
            rating: 4,
            stock: false,
          },
          {
            name: 'Orion RX 6800 XT',
            image: '3.png',
            price: 649.99,
            rating: 3,
            stock: true,
          },
          {
            name: 'Vortex RTX 3090',
            image: '4.png',
            price: 1499.99,
            rating: 4,
            stock: true,
          },
          {
            name: 'Cosmos GTX 1660 Super',
            image: '5.png',
            price: 299.99,
            rating: 4,
            stock: false,
          },
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
    formatPrice,
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
    checkout() {
      this.$router.push('/checkout');
      this.dialog = false;
    },
    async handleSearchClick() {
      this.dialog1 = true;
      const res = await FetchAllProduct()
      this.products = res;
      console.log(this.products);

    }
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
