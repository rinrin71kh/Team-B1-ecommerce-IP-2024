<template>
  <div class="max-w-sm mx-auto p-4 bg-white shadow-lg absolute z-10 right-[100px] max-md:right-4 max-md:w-[92%] top-16 max-md:top-20 w-full max-md:pl-4">
    <div v-if="laoding" class="flex relative justify-center items-center w-full">
      <!-- Loading -->
      <!-- <v-progress-linear color="blue-darken-3" model-value="20" indeterminate></v-progress-linear> -->
    </div>
    <div v-if="cartItems.length != 0" v-for="(item, index) in cartItems" :key="index" class="flex items-center mb-4">
      <img :src="url + item.productDetails?.proImage?.link.href" alt="Product Image"
        class="w-16 h-16 object-cover mr-4" />
      <div class="flex-1">
        <h3 class="text-lg font-semibold">{{ item.productDetails.productname }}</h3>
        <p class="text-sm text-gray-500">{{ item.productDetails.proDescription }}</p>
        <div class="flex gap-2">
          <p v-if="item.productDetails.discountasPercentage" class="line-through text-gray-400 text-md">
            ${{ item.productDetails.basePrice }}
          </p>
          <p v-if="item.productDetails.discountasPercentage" class="text-black-200 font-semibold text-md">
            ${{ item.productDetails.basePrice - (item.productDetails.basePrice *
              item.productDetails.discountasPercentage / 100) }}
          </p>
          <p v-else class="text-black-200 font-semibold text-md">
            ${{ item.productDetails.basePrice }}
          </p>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <button :disabled="QTYs[index] === 1"
          @click="Decrease('Carts', item.productDetails.id, item.qty, item.userfid, index)"
          class="w-7 h-7 bg-primary hover:bg-gray-600 flex items-center justify-center">
          -
        </button>
        <span class="w-8 text-center border-2 border-black">{{ QTYs[index] }}</span>
        <button @click="IncreaseQTY('Carts', item.productDetails.id, item.qty, item.userfid, index)"
          class="w-7 h-7 bg-primary hover:bg-gray-600 flex items-center justify-center">
          +
        </button>
      </div>
    </div>
    <div v-else-if="cartItems.length == 0 && !laoding">Empty</div>
    <!-- <div class="pt-4">
      <div class="flex justify-between text-lg font-semibold">
        <span>Subtotal</span>
        <span>$ {{ subtotal }}</span>
      </div>
      <div class="flex justify-between text-lg font-semibold">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div class="flex justify-between text-lg font-bold border-t py-4">
        <span>Total</span>
        <span>$ {{ subtotal }}</span>
      </div>
    </div> -->
    <div class="mt-4 flex justify-center gap-3">
      <a href="/checkout" class="px-4 py-2 bg-primary w-full hover:bg-gray-600 text-center text-white">View
        Cart</a>
      <a class="px-4 py-2 bg-primary w-full text-white hover:bg-green-600 text-center">History</a>
    </div>
  </div>
</template>

<script>
import { AddToCart, DecreaseQTY } from '@/api/Cart/AddToCart';
import { getCart } from '@/api/Cart/getCart';
import { onMounted, ref, toRaw } from 'vue';

export default {
  data() {
    return {
      cartItems: [],
      url: 'https://techbox.developimpact.net/',
      QTYs: [],
      laoding: ref(true),
    };
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((total, item, index) => {
        return total + (item.productDetails.basePrice * this.QTYs[index]);
      }, 0);
    },
  },
  methods: {
    async IncreaseQTY(cartStatus, productid, qty, userfid, index) {
      this.laoding = true;
      try {
        const check = await AddToCart(cartStatus, productid, qty, userfid);
        if(check){
          this.QTYs[index] += 1;
        }
      } catch (error) {
        console.error('Error in IncreaseQTY:', error);
      } finally {
        this.laoding = false;
      }
    },

    async Decrease(cartStatus, productid, qty, userfid, index) {
      this.laoding = true;
      try {
        const check = await DecreaseQTY(productid);
        if(check){
          this.QTYs[index] -= 1;
        }     
      } catch (error) {
        console.error('Error decreasing quantity:', error);
      } finally {
        this.laoding = false;
      }
    },

  },
  async mounted() {
    try {
      const rawData = await getCart('testinguserfid'); // Fetch the cart data
      this.cartItems = toRaw(rawData);
      console.log("Cart items:" + this.cartItems.length)
      this.laoding = false;
      this.QTYs = this.cartItems.map(item => item.qty); // Initialize QTYs based on cartItems
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  }
}

</script>
