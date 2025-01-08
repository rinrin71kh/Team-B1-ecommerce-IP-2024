<template>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <div
      v-for="(product, index) in products"
      :key="product.id"
      class="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
    >
      <a :href="`/product/${product.id}`" class="block">
        <!-- Product Image -->
        <div class="relative">
          <img
            :src="url + product.proImage?.link?.href"
            :alt="product.productname"
            class="w-full h-auto object-cover rounded aspect-square"
          />
        </div>

        <!-- Product Name & Description -->
        <div class="mt-3">
          <h2 class="text-lg font-semibold text-gray-800">
            {{ product.productname }}
          </h2>
          <p class="text-sm text-gray-600 mt-1 line-clamp-2">
            {{ product.proDescription }}
          </p>
        </div>

        <!-- Price -->
        <div class="mt-3">
          <div class="flex items-center gap-2">
            <p
              v-if="product.discountasPercentage"
              class="line-through text-gray-400 text-base"
            >
              ${{ formatPrice(product.basePrice) }}
            </p>
            <p
              v-if="product.discountasPercentage"
              class="text-red-600 font-bold text-xl"
            >
              $
              {{
                formatPrice(Math.round(
                  product.basePrice -
                    (product.basePrice * product.discountasPercentage) / 100
                ))
              }}
            </p>
            <p v-else class="text-red-600 font-bold text-xl">
              ${{ formatPrice(product.basePrice) }}
            </p>
          </div>
        </div>
      </a>

      <!-- Rating and Buttons -->
      <div class="mt-4 flex md:flex md:flex-row flex-col items-center gap-4">
        <!-- Rating -->
        <v-rating
          hover
          :length="5"
          :size="20"
          :model-value="3"
          active-color="warning"
        />

        <!-- Add to Cart Button -->
        <div class="flex-grow">
          <v-btn
            v-if="product.availableStatus?.key === 'available' && status[product.id]"
            @click="addtoCart('Carts', product.id, 1, 'testinguserfid')"
            class="w-full"
            variant="outlined"
            rounded="0"
            height="44"
          >
            Add to Cart
          </v-btn>

          <v-btn
            v-else-if="!status[product.id]"
            disabled
            class="w-full custom-btn"
            variant="outlined"
            rounded="0"
            height="44"
          >
            Processing...
          </v-btn>

          <v-btn
            v-else
            class="w-full custom-btn cursor-not-allowed"
            variant="outlined"
            rounded="0"
            height="44"
          >
            Pre-order
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { getProductbyCategories } from "@/api/Fetch/fetchProduct";
import { AddToCart } from "@/api/Cart/AddToCart";
import { useNotifyStore } from "@/stores/cartStore";
import { formatPrice } from "@/util";

export default {
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  methods: {
    formatPrice,
    addtoCart(cartstatus, productid, qty, userfid) {
      this.$emit("add-to-cart", cartstatus, productid, qty, userfid);
    },
  },
  setup(props) {

    const url = "https://techbox.developimpact.net";
    const products = ref(null);
    const status = ref({});
    const sharedStae = useNotifyStore()

    onMounted(async () => {
      try {

        const response = await getProductbyCategories(props.category);
        products.value = response;

        response.forEach((product) => {
          status.value[product.id] = true;
        });

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    });

    const addtoCart = async (cartstatus, productid, qty, userfid) => {
      status.value[productid] = false;
      try {
        await AddToCart(cartstatus, productid, qty, userfid);
        sharedStae.increment()
      } catch (error) {
        console.log("Error adding to cart:", error.message);
      } finally {
        status.value[productid] = true;
      }
    };

    return {
      url,
      products,
      status,
      addtoCart,
    };
  },
};
</script>
