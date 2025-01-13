<template>
    <div class="order-history-wrapper">
      <v-container class="py-8">
        <v-card>
          <v-card-title class="text-h5 d-flex align-center">
            <v-icon icon="mdi-history" class="me-2"></v-icon>
            Order History
          </v-card-title>
  
          <v-card-text>
            <div v-if="loading" class="d-flex justify-center py-4">
              <v-progress-circular indeterminate></v-progress-circular>
            </div>
  
            <div v-else-if="orders.length === 0" class="text-center py-8">
              <v-icon icon="mdi-cart-off" size="64" class="mb-4 text-grey"></v-icon>
              <div class="text-h6 text-grey">No orders found</div>
              <v-btn color="primary" class="mt-4" to="/">
                Continue Shopping
              </v-btn>
            </div>
  
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
                        {{ formatDate(order.orderDate) }}
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="text-h6">${{ formatPrice(order.totalAmount) }}</div>
                      <v-chip
                        :color="getStatusColor(order.status)"
                        size="small"
                        class="text-uppercase"
                      >
                        {{ order.status }}
                      </v-chip>
                    </div>
                  </div>
                </v-expansion-panel-title>
  
                <v-expansion-panel-text>
                  <v-list>
                    <v-list-item
                      v-for="item in order.items"
                      :key="item.id"
                      class="mb-2"
                    >
                      <template v-slot:prepend>
                        <v-img
                          :src="item.productImage"
                          width="80"
                          height="80"
                          cover
                          class="rounded"
                        ></v-img>
                      </template>
  
                      <v-list-item-title class="font-weight-bold">
                        {{ item.productName }}
                      </v-list-item-title>
  
                      <v-list-item-subtitle>
                        Quantity: {{ item.quantity }} × ${{ formatPrice(item.price) }}
                      </v-list-item-subtitle>
  
                      <template v-slot:append>
                        <div class="text-right">
                          <div class="text-h6">
                            ${{ formatPrice(item.quantity * item.price) }}
                          </div>
                          <v-btn
                            variant="text"
                            color="primary"
                            density="comfortable"
                            :to="`/product/${item.productId}`"
                          >
                            Buy Again
                          </v-btn>
                        </div>
                      </template>
                    </v-list-item>
                  </v-list>
  
                  <v-divider class="my-4"></v-divider>
  
                  <div class="d-flex justify-space-between align-center">
                    <div class="text-subtitle-1">Shipping Address:</div>
                    <div class="text-right">
                      {{ order.shippingAddress }}
                    </div>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
  </template>
  
  <script>
  import { formatPrice } from '@/util';
  
  export default {
    name: 'OrderHistory',
    data() {
      return {
        loading: true,
        orders: [],
      };
    },
    methods: {
      formatPrice,
      formatDate(date) {
        return new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      },
      getStatusColor(status) {
        const colors = {
          'pending': 'warning',
          'processing': 'info',
          'shipped': 'primary',
          'delivered': 'success',
          'cancelled': 'error',
        };
        return colors[status.toLowerCase()] || 'grey';
      },
      async fetchOrders() {
        try {
          this.loading = true;
          this.orders = [
            {
              id: '1001',
              orderDate: '2024-01-10',
              status: 'delivered',
              totalAmount: 1299.98,
              shippingAddress: 'Phnom Penh',
              items: [
                {
                  id: 1,
                  productId: 'prod-1',
                  productName: 'Gaming Laptop XPS-15',
                  productImage: '/products/laptop-1.jpg',
                  quantity: 1,
                  price: 1299.99,
                },
              ],
            },
          ];
        } catch (error) {
          console.error('Error fetching orders:', error);
        } finally {
          this.loading = false;
        }
      },
    },
    mounted() {
      this.fetchOrders();
    },
  };
  </script>
  
  <style scoped>
  .order-history-wrapper {
    min-height: calc(100vh - 64px);
    display: flex;
    flex-direction: column;
  }
  
  .v-container {
    flex: 1 0 auto;
  }
  
  .v-expansion-panel {
    border: 1px solid #e0e0e0 !important;
    margin-bottom: 1rem !important;
  }
  </style>
