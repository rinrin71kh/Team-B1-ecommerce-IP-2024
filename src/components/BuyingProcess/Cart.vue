<template>
    <div v-if="laoding" class="flex justify-center items-center w-full">
      <!-- Loading -->
      <v-progress-linear color="cyan" indeterminate></v-progress-linear>
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
    <div v-else-if="cartItems.length == 0 && !laoding">Your Cart is empty</div>
</template>

<script>
import { AddToCart, DecreaseQTY } from '@/api/Cart/AddToCart';
import { getCart } from '@/api/Cart/getCart';
import { ref, toRaw } from 'vue';

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
