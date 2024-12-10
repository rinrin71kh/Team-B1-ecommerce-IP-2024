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
            <tr
              v-for="(item, index) in cartItems"
              :key="index"
              class="border-b border-gray-300"
            >
              <td class="p-4 text-center">
                <input
                  type="checkbox"
                  v-model="item.selected"
                  @change="updateCartSummary"
                />
              </td>
              <td class="p-4">
                <div class="flex items-center">
                  <img
                    :src="item.image"
                    alt="Product Image"
                    class="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h2 class="font-semibold">{{ item.name }}</h2>
                    <p class="text-sm text-gray-500">{{ item.description }}</p>
                  </div>
                </div>
              </td>
              <td class="p-4 text-center">
                <div class="flex items-center justify-center space-x-2">
                  <button
                    class="px-2 py-1 bg-gray-200 rounded"
                    @click="decreaseQuantity(index)"
                  >
                    -
                  </button>
                  <span>{{ item.quantity }}</span>
                  <button
                    class="px-2 py-1 bg-gray-200 rounded"
                    @click="increaseQuantity(index)"
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="p-4 text-right font-semibold">
                $ {{ (item.quantity * item.price).toFixed(2) }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between mt-6 ">
          <div class="w-64 bg-gray-50 p-4 rounded-lg shadow">
            <div class="flex justify-between mb-2">
              <span>Subtotal</span>
              <span class="font-semibold">$ {{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Discount</span>
              <span class="font-semibold">$ {{ discount.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span>Shipping</span>
              <span class="font-semibold">Free</span>
            </div>
            <hr class="my-2" />
            <div class="flex justify-between">
              <span class="font-bold">Total</span>
              <span class="font-bold">$ {{ total.toFixed(2) }}</span>
            </div>
            <button
              class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              @click="checkout"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';

export default {
  data() {
    return {
      cartItems: [
        {
          name: "MacBook Pro M3",
          description: "M2 Chip / 8GB / SSD 256GB / 13.6\" Color - Black",
          price: 1599.0,
          quantity: 1,
          image: "https://via.placeholder.com/150", // Replace with actual image URL
          selected: true,
        },
        {
          name: "MacBook Air M2",
          description: "M2 Chip / 8GB / SSD 256GB / 13.6\" Color - Silver",
          price: 1249.0,
          quantity: 1,
          image: "https://via.placeholder.com/150", // Replace with actual image URL
          selected: false,
        },
        {
          name: "MacBook Pro M4",
          description: "M2 Chip / 8GB / SSD 256GB / 13.6\" Color - Black",
          price: 2199.0,
          quantity: 1,
          image: "https://via.placeholder.com/150", // Replace with actual image URL
          selected: false,
        },
      ],
    };
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce(
        (sum, item) => (item.selected ? sum + item.quantity * item.price : sum),
        0
      );
    },
    discount() {
      return 0; // Add discount logic if needed
    },
    total() {
      return this.subtotal - this.discount;
    },
  },
  methods: {
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
      this.updateCartSummary();
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
        this.updateCartSummary();
      }
    },
    updateCartSummary() {
      // Update cart calculations if needed
    },
    checkout() {
      router.push('/checkout')
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
