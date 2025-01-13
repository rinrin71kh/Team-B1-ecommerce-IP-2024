<template>
  <v-table class="w-full border-collapse border border-gray-300">
    <thead class="bg-gray-200">
      <tr>
        <th><v-btn :disabled="dialog" color="primary" icon="mdi-refresh" text="Start loading" @click="dialog = true"
            size="30"></v-btn></th>
        <th class="p-4 text-left">Product Image</th>
        <th class="p-4 text-center">Product Name</th>
        <th class="p-4 text-center">Quantity</th>
        <th class="p-4 text-right">Total Price</th>
      </tr>
      <th v-if="loading" colspan="6" class="text-center h-2 bg-white">
        <v-progress-linear v-if="loading" color="cyan" indeterminate></v-progress-linear>
      </th>
      <th v-else colspan="6" class="text-center h-2 bg-white"></th>
    </thead>
    <template v-if="loading">
    </template>
    <template v-if="!loading && cartItems.length == 0">
      <tr>
        <td colspan="6" class="text-center p-4">
          Your Cart is empty

          <v-btn @click="goHome" color="primary" size="35" icon="mdi-store-plus"></v-btn>
        </td>
      </tr>
    </template>
    <tbody v-else>
      <tr v-for="(item, index) in cartItems" :key="index" class="border-b border-gray-300">
        <td class="p-4 text-center">
          <input type="checkbox" v-model="item.selected" @change="updateCartSummary(item)" />
        </td>
        <td class="p-4">
          <img :src="url + item.productDetails?.proImage?.link.href" alt="Product Image"
            class="w-16 h-16 object-cover mr-4" />
        </td>
        <td class="p-4">
          <div class="flex flex-col">
            <h2 class="font-semibold text-lg line-clamp-2">{{ item.productDetails?.productname }}</h2>
            <p class="text-sm text-gray-500 line-clamp-2">{{ item.productDetails?.proDescription }}</p>
          </div>
        </td>

        
        <td class="px-4 w-1/6 text-right font-semibold text-danger-500 text-lg whitespace-nowrap">
          <!-- $ {{ formatPrice(Price[index]) }} -->
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
import { getCart } from '@/api/Cart/getCart';
import { getUser } from '@/api/getAccessToken';
import { onMounted } from 'vue';

export default {
  data() {
    return {
      search: '',
      cartItems: [
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
    }
  },
  setup() {
    const user = getUser()
    onMounted(async () => {
      const user = await getCart("Bought")
      console.log(user);
      
    })
    return {

    }
  },
}
</script>