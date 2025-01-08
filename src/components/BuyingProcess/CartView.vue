<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      <div class="flex justify-between items-center p-6">
        <h1 class="text-2xl font-bold">Your shopping cart</h1>
        <div class="">
          <v-dialog v-model="dialog" max-width="320" persistent>
            <v-list class="py-2" color="primary" elevation="12" rounded="">
              <v-list-item prepend-icon="$vuetify-outline" title="Refreshing Application...">
                <template v-slot:prepend>
                  <div class="pe-4">
                    <img src="/public/E_commerce logo.jpg" alt="" class="aspect-square w-10 rounded-full" />
                  </div>
                </template>

                <template v-slot:append>
                  <v-progress-circular color="primary" indeterminate="disable-shrink" size="16"
                    width="2"></v-progress-circular>
                </template>
              </v-list-item>
            </v-list>
          </v-dialog>
        </div>
      </div>
      <div class="p-6 flex gap-4 items-start">
        <table class="w-full border-collapse border border-gray-300">
          <thead class="bg-gray-200">
            <tr>
              <th><v-btn :disabled="dialog" color="primary" icon="mdi-refresh" text="Start loading"
                  @click="dialog = true" size="30"></v-btn></th>
              <th class="p-4 text-left">Product</th>
              <th class="p-4 text-center">Quantity</th>
              <th class="p-4 text-right">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="index" class="border-b border-gray-300">
              <td class="p-4 text-center">
                <input type="checkbox" v-model="item.selected" @change="updateCartSummary(item)" />
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
                <div class="flex items-center justify-center space-x-2 gap-5">
                  <v-btn @click="DeleteItems(item.id)" size="30" color="red" icon="mdi-delete"></v-btn>
                  <div class="flex items-center space-x-2">
                    <button :disabled="QTYs[index] === 1" @click="Decrease(item.productDetails.id, index)"
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
              <td class="px-4 w-1/6 text-right font-semibold">
                $ {{ Price[index] }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between mt-6">
          <div class="w-64 bg-gray-50 p-4 rounded-lg shadow">
            <div class="flex justify-between mb-2">
              <span>Subtotal</span>
              <span class="font-semibold">$ {{ subtotal }}</span>
            </div>
            <div class="flex justify-betwee gap-4  items-center mb-2">
              <input :disabled="isDisabled" v-model="Code" type="text" placeholder="Apply Code"
                class="w-full p-2 border border-gray-300 rounded-lg" />
              <button @click="ApplyCode"
                :class="['rounded-xl text-white shadow-xl font-semibold bg-blue-400 text-sm  px-5', Btn]">Apply</button>
            </div>
            <div class="flex justify-between mb-2">
              <span>Discount</span>
              <span :class="['font-semibold', text]">{{ discountPercentage }}%</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Shipping</span>
              <span class="font-semibold">Free</span>
            </div>
            <hr class="my-2" />
            <div class="flex justify-between">
              <span class="font-bold">Grand Total</span>
              <span class="font-bold">$ {{ Total }}</span>
            </div>

            <v-dialog v-model="dialog1" transition="dialog1-bottom-transition" fullscreen>
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="w-full mt-4" color="blue" :onclick="loadQRpay" text="Pay now"
                  v-bind="activatorProps"></v-btn>
              </template>
            </v-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center pa-4">
    <v-dialog v-model="dialog1" transition="dialog-bottom-transition" fullscreen>
      <v-card>
        <v-toolbar>
          <v-btn icon="mdi-close" @click="closeDialog1"></v-btn>

          <v-toolbar-title>Checkout Process</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn text="Close" variant="text" @click="closeDialog1"></v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <component v-if="sharedState.QRpayComponent" :is="sharedState.QRpayComponent" :amountInKHR="GrandTotal"
          :CouponID="check.id" :CouponQTY="check.qty" :itemsID="itemsID" />

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { AddToCart, DecreaseQTY } from '@/api/Cart/AddToCart';
import { getCart } from '@/api/Cart/getCart';
import { ref, toRaw } from 'vue';
import { defineAsyncComponent } from 'vue';
import QRpay from './QRpay.vue';
import { sharedState } from '@/stores/cartStore';
import { ApplyCoupon } from '@/api/payway/BakongPay';
import { DeleteItemByID } from '@/api/Cart/DeleteItem';

export default {
  data() {
    return {
      cartItems: [],
      url: 'https://techbox.developimpact.net/',
      QTYs: [],
      Price: [],
      itemsID: [],
      GrandTotal: ref(0),
      loading: ref(true),
      visible: false,
      Code: '',
      text: '',
      Btn: '',
      check: '',
      dialog: false,
      dialog1: false,
      placeholder: 'Apply Coupon',
      isDisabled: false,
      discountPercentage: 0,
      QRpayComponent: null
    };
  },
  components: {
    QRpay
  },
  watch: {
    async dialog(val) {
      this.refresh(val)
    },
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((total, item, index) => {
        if (item.selected) {
          const basePrice = item.productDetails.basePrice * this.QTYs[index];
          const discountAmount = basePrice * (this.discountPercentage / 100); // Calculate discount
          return Math.round(total + (basePrice - discountAmount)); // Subtract discount from the base price
        }
        return total;
      }, 0);
    },
    Total() {
      this.visible = true;
      return this.subtotal;
    },
    sharedState() {
      return sharedState;
    }
  },
  methods: {
    async refresh(val) {
      if (!val) return
      if (await this.Initial()) {
        this.dialog = false;
      }
    },
    async IncreaseQTY(cartStatus, productid, qty, userfid, index) {
      this.loading = true;
      try {
        const check = await AddToCart(cartStatus, productid, qty, userfid);
        if (check) {
          this.QTYs[index] += 1;
          this.Price[index] = this.cartItems[index].productDetails.basePrice * this.QTYs[index];
          this.updateCartSummary(); // Recalculate subtotal and total
        }
      } catch (error) {
        console.error('Error in IncreaseQTY:', error);
      } finally {
        this.loading = false;
      }
    },

    async Decrease(productid, index) {
      this.loading = true;
      try {
        const check = await DecreaseQTY(productid);
        if (check) {
          this.QTYs[index] -= 1;
          this.Price[index] = this.cartItems[index].productDetails.basePrice * this.QTYs[index];
          this.updateCartSummary(); // Recalculate subtotal and total
        }
      } catch (error) {
        console.error('Error decreasing quantity:', error);
      } finally {
        this.loading = false;
      }
    },

    updateCartSummary(item) {
      if (item.selected) {
        if (!this.itemsID.includes(item.id)) {
          this.itemsID.push(item.id);
        }
      } else {
        this.itemsID = this.itemsID.filter(id => id !== item.id);
      }

      this.GrandTotal = this.subtotal; // Update the GrandTotal whenever items are selected/deselected
    },

    async ApplyCode() {
      this.check = await ApplyCoupon(this.Code)
      if (this.check.status == "success") {
        this.discountPercentage = this.check.percentage;
        this.text = "text-green-500"
        this.Btn = "hidden"
        this.isDisabled = true;
      }
      else {
        this.Code = "Invalid Code"
      }
    },

    loadQRpay() {
      this.GrandTotal = this.subtotal;
      if (!sharedState.QRpayComponent && this.GrandTotal > 0) {
        sharedState.QRpayComponent = defineAsyncComponent(() =>
          import('./QRpay.vue')
        )
      } else {
        this.dialog1 = false
        alert("Select any items")
      }
    },
    closeDialog1() {
      this.dialog1 = false;
      sharedState.QRpayComponent = null;
    },
    async Initial() {
      try {
        const rawData = await getCart('testinguserfid'); // Fetch the cart data
        this.cartItems = toRaw(rawData);
        this.loading = false;
        this.QTYs = this.cartItems.map(item => item.qty);
        this.Price = this.cartItems.map(item => item.productDetails.basePrice);
        return true
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }

    },
    async DeleteItems(productId) {
      this.dialog = true
      try {
        const check = await DeleteItemByID(productId)
        this.refresh();
        this.dialog()
        if (check) {
          await this.Initial()
        }
      } catch (error) {

      }
    }
  },
  async mounted() {
    await this.Initial()
  }
}
</script>
