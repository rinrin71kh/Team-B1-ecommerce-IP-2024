<template>
  <div class="order-history-wrapper">
    <v-container class="py-8">
      <v-card>
        <v-card-title class="text-h5 d-flex align-center">
          <v-icon icon="mdi-history" class="me-2"></v-icon>
          Order History
        </v-card-title>

        <v-card-text>
          <!-- Show loading spinner -->
          <div v-if="loading" class="d-flex justify-center py-4">
            <v-progress-circular indeterminate></v-progress-circular>
          </div>

          <!-- No orders found -->
          <div v-else-if="orders.length === 0" class="text-center py-8">
            <v-icon icon="mdi-cart-off" size="64" class="mb-4 text-grey"></v-icon>
            <div class="text-h6 text-grey">No orders found</div>
            <v-btn color="primary" class="mt-4" to="/">
              Continue Shopping
            </v-btn>
          </div>

          <!-- Order list -->
          <v-expansion-panels v-else>
            <v-expansion-panel 
              v-for="order in orders" 
              :key="order.id" 
              class="mb-4"
              >
              <v-expansion-panel-title>
                <div class="d-flex justify-space-between align-center flex-grow-1">
                  <div>
                    <div class="text-subtitle-1">Order #{{ order.id }}</div>
                    <div class="text-caption text-grey">
                      {{ formatDate(order.dateCreated) }}
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-h6 font-bold">${{ formatPrice(order.totalprice) }}</div>
                    <v-chip :color="getStatusColor(order.paymentStatus)" size="small" class="text-uppercase">
                      {{ order.paymentStatus }}
                    </v-chip>
                  </div>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <v-list>
                  <v-list-item v-for="item in order.productDetails" :key="item.id" class="mb-2">
                    <img :src="url + item.productInfo.proImage?.link?.href" :alt="item.productname"
                      class="w-14 h-14 object-cover rounded aspect-square" />
                    <v-list-item-title class="font-weight-bold">
                      {{ item.productInfo.productname }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Quantity: {{ item.cartqty }} × ${{ item.productInfo.basePrice }}
                    </v-list-item-subtitle>
                    <v-list-item-action class="mt-4">
                      <v-btn color="primary" @click="viewProduct(item.productInfo.id)">View product</v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-divider class="my-4"></v-divider>

                <div class="d-flex justify-space-between align-center">
                  <div class="text-subtitle-1">Shipping Address:</div>
                  <div class="text-right">
                    {{ order.shippingid }}
                  </div>
                </div>

                <!-- Pass the selected order to Receipt -->
                <v-btn color="gray" @click="viewReceipt(order)">View Receipt</v-btn>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>


<script>
import { checkout, getCheckout } from "@/api/checkout/checkout";
import { getUser } from "@/api/getAccessToken";
import Receipt from "@/components/resource/Receipt.vue";
import router from "@/router";
import { receipt } from "@/stores/cartStore";
import { formatPrice } from "@/util";
import { onMounted, ref } from "vue";

export default {
  name: "OrderHistory",

  components: {
    Receipt
  },

  setup() {
    const user = getUser();
    const orders = ref([]);
    const loading = ref(true);
    const url = "https://techbox.developimpact.net";

    onMounted(async () => {
      try {
        const fetchedOrders = await getCheckout(user);
        orders.value = fetchedOrders.map(order => ({
          ...order,
          totalPrice: order.Carts.reduce(
            (sum, cart) => sum + cart.price * cart.quantity,
            0
          ),
        }));
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        loading.value = false;
      }
    });

    const viewReceipt = () => {
      router.push("/receipt");
    };

    return {
      orders,
      loading,
      url,
      viewReceipt, 
      formatPrice,
      formatDate(date) {
        return new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      },
      getStatusColor(status) {
        const colors = {
          pending: "warning",
          processing: "info",
          shipped: "primary",
          success: "success",
          cancelled: "error"
        };
        return colors[status.toLowerCase()] || "grey";
      },
    };
  },
  methods: {
    viewProduct(route) {
      router.push(`/product/${route}`);
    }
  }
};
</script>
