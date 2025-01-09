<template>
  <div class="  max-md:px-4 max-lg:px-8 py-14 mx-[100px] ">
    <!-- Navigation Tabs -->
    <v-card>
      <v-tabs v-model="tab"
        class="border-b border-gray-300 mb-6 items-end text-nowrap max-md:overflow-x-auto scrollbar-hide text-gray-500">
        <v-tab class="hover:bg-slate-200" value="Macbook">Macbook</v-tab>
        <v-tab class="hover:bg-slate-200" value="gaminggear">Gaming gear</v-tab>
        <v-tab class="hover:bg-slate-200" value="accessories">Accessories</v-tab>
        <v-tab class="hover:bg-slate-200" value="laptop">Laptop</v-tab>
      </v-tabs>

      <v-card-text>
        <!-- Pass Selected Tab Value to Product Component -->
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="Macbook">
            <Product :category="tab" />
          </v-tabs-window-item>

          <v-tabs-window-item value="gaminggear">
            <Product :category="tab" />
          </v-tabs-window-item>

          <v-tabs-window-item value="accessories">
            <Product :category="tab" />
          </v-tabs-window-item>
          <v-tabs-window-item value="laptop">
            <Product :category="tab" />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>

    <!-- Product Grid -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  data: () => ({
    tab: "Macbook", // Default tab value
  }),
  components: {
    Product,
  },
};
</script>
