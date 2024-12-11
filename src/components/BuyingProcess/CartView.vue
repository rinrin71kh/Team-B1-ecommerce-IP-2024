<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold mb-4">Cart</h1>
      <div class="p-6 flex 
       gap-4 items-start">
        <table class="w-full border-collapse border border-gray-300">
          <thead class="bg-gray-200">
            <tr>
              <th class="p-4 text-left"><input type="checkbox" /></th>
              <th class="p-4 text-left">Product</th>
              <th class="p-4 text-center">Quantity</th>
              <th class="p-4 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="index" class="border-b border-gray-300">
              <td class="p-4 text-center">
                <input type="checkbox" v-model="item.selected" @change="updateCartSummary" />
              </td>
              <td class="p-4">
                <div class="flex items-center">
                  <img :src="url + item.productDetails.proImage.link.href" alt="Product Image"
                    class="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h2 class="font-semibold">{{ item.productDetails.productname }}</h2>
                    <p class="text-sm text-gray-500">{{ item.productDetails.proDescription }}</p>
                  </div>
                </div>
              </td>
              <td class="p-4 text-center">
                <div class="flex items-center justify-center space-x-2">
                  <div class="flex items-center space-x-2">
                    <button :disabled="QTYs[index] === 1"
                      @click="Decrease('Carts', item.productDetails.id, item.qty, item.userfid, index)"
                      class="w-7 h-7 bg-primary hover:bg-gray-600 rounded-md flex items-center justify-center">
                      -
                    </button>
                    <span class="w-8 text-center border-2 border-black">{{ QTYs[index] }}</span>
                    <button @click="IncreaseQTY('Carts', item.productDetails.id, item.qty, item.userfid, index)"
                      class="w-7 h-7 bg-primary hover:bg-gray-600 rounded-md flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td class="p-4 text-right font-semibold">
                $ {{ Price[index] }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between mt-6 ">
          <div class="w-64 bg-gray-50 p-4 rounded-lg shadow">
            <div class="flex justify-between mb-2">
              <span>Subtotal</span>
              <span class="font-semibold">$ {{ subtotal }}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Discount</span>
              <span class="font-semibold">0% {{ discount }}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Shipping</span>
              <span class="font-semibold">Free</span>
            </div>
            <hr class="my-2" />
            <div class="flex justify-between">
              <span class="font-bold">Total</span>
              <span class="font-bold">$ {{ subtotal }}</span>
            </div>
            <button class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" @click="checkout">
              Checkout
            </button>
          </div>
        </div>
      </div>
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
      Price: [],
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
        await AddToCart(cartStatus, productid, qty, userfid);
        this.QTYs[index] += 1;
        this.Price[index] = this.cartItems[index].productDetails.basePrice * this.QTYs[index];
      } catch (error) {
        console.error('Error in IncreaseQTY:', error);
      } finally {
        this.laoding = false;
      }
    },

    async Decrease(cartStatus, productid, qty, userfid, index) {
      this.laoding = true;
      try {
        await DecreaseQTY(cartStatus, productid, qty, userfid);
          this.QTYs[index] -= 1;
          this.Price[index] = this.cartItems[index].productDetails.basePrice * this.QTYs[index];
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
      this.laoding = false;
      this.QTYs = this.cartItems.map(item => item.qty); 
      this.Price = this.cartItems.map(item => item.productDetails.basePrice);
      console.log(this.cartItems);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  }
}

</script>
