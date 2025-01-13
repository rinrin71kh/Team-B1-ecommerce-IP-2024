<template>
    <div class="px-6 md:px-16 py-8 max-lg:px-16">
        <!-- Breadcrumb -->
        <div class="text-sm text-gray-500 mb-4">
            <a href="/">Home</a> &gt; <span>Products</span> &gt; <span>Laptop</span> &gt;
            <span class="text-black font-medium">{{ display }}</span>
        </div>

        <!-- Page Title -->
        <h1 class="text-2xl font-semibold mb-6">{{ display }}</h1>

        <!-- Layout -->
        <div class="flex flex-wrap gap-6">
            <!-- Sidebar -->
            <aside class="max-lg:w-full">
                <div class="mb-6">
                    <h2 class="text-lg font-semibold mb-4">CATEGORIES</h2>
                    <ul class="space-y-3">
                        <li v-for="(category, index) in categories" :key="category.id">
                            <label>
                                <input type="radio" class="mr-2" :value="category.id" v-model="selectedCategory"
                                    @change="fetchProductsByCategory(index)" />
                                {{ category.name }}
                            </label>
                        </li>
                    </ul>
                    <a href="#" class="text-blue-500 text-sm mt-4 inline-block" @click.prevent="resetCategory">Reset</a>
                </div>
            </aside>

            <!-- Product Section -->
            <main class="flex-1">
                <!-- Sort Options -->
                <div class="flex justify-end items-center mb-6 border-b-2 py-2">
                    <label for="sort" class="mr-2 text-sm font-medium">Sort by</label>
                    <select id="sort" class="border border-gray-300 rounded px-3 py-1 text-sm" v-model="sortOption">
                        <option value="default">Default</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                    </select>
                </div>

                <!-- Product List -->
                <div v-if="loading" class="flex items-start justify-center h-screen">
                    <v-progress-linear color="cyan" indeterminate></v-progress-linear>
                </div>
                <div v-else class="md:px-16">
                    <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div v-for="(product, index) in sortedProducts" :key="index"
                            class="bg-white p-6 flex flex-col justify-between border rounded-lg shadow hover:shadow-md transition">
                            <a :href="`/product/${product.id}`" class="block">
                                <!-- Product Image -->
                                <div class="relative">
                                    <img :src="url + product.proImage?.link?.href" :alt="product.productname"
                                        class="w-full h-auto object-cover rounded aspect-square" />
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
                                        <p v-if="product.discountasPercentage"
                                            class="line-through text-gray-400 text-base">
                                            ${{ product.basePrice }}
                                        </p>
                                        <p v-if="product.discountasPercentage" class="text-red-600 font-bold text-xl">
                                            $
                                            {{
                                                Math.round(
                                                    product.basePrice -
                                                    (product.basePrice * product.discountasPercentage) / 100
                                                )
                                            }}
                                        </p>
                                        <p v-else class="text-red-600 font-bold text-xl">
                                            ${{ product.basePrice }}
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <!-- Rating and Buttons -->
                            <div class="mt-4 flex md:flex md:flex-row flex-col items-center gap-4">
                                <!-- Rating -->
                                <v-rating hover :length="5" :size="20" :model-value="3" active-color="warning" />

                                <!-- Add to Cart Button -->
                                <!-- <div class="flex-grow">
                                    <v-btn v-if="product.availableStatus?.key === 'available' && status[product.id]"
                                        @click="addtoCart('Carts', product.id, 1, 'testinguserfid')"
                                        class="w-full custom-btn" variant="outlined" rounded="0" height="44">
                                        Add to Cart
                                    </v-btn>

                                    <v-btn v-else disabled class="w-full custom-btn" variant="outlined" rounded="0"
                                        height="44">
                                        Processing...
                                    </v-btn>
                                </div> -->
                                <div class="flex-grow">
                                    <v-btn v-if="product.availableStatus?.key === 'available' && status[product.id]"
                                        @click="addtoCart('Carts', product.id, 1, 'testinguserfid')" class="w-full"
                                        variant="outlined" rounded="0" height="44">
                                        Add to Cart
                                    </v-btn>

                                    <v-btn v-else-if="!status[product.id]" disabled class="w-full custom-btn"
                                        variant="outlined" rounded="0" height="44">
                                        Processing...
                                    </v-btn>

                                    <v-btn v-else class="w-full custom-btn cursor-not-allowed" variant="outlined"
                                        rounded="0" height="44">
                                        Pre-order
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { getProductbyCategories } from '@/api/Fetch/fetchProduct';
import { AddToCart } from '@/api/Cart/AddToCart';
import { useRoute } from 'vue-router';
import { getUser } from '@/api/getAccessToken';
import { useNotifyStore } from '@/stores/cartStore';
export default {
    setup() {
        const url = 'https://techbox.developimpact.net';
        const status = ref({});
        const sharedStae = useNotifyStore();
        const categories = [
            { id: 'Macbook', name: 'Macbook' },
            { id: 'gaminggear', name: 'Gaming' },
            { id: 'accessories', name: 'Accessories' },
            { id: 'laptop', name: 'All Laptop' },
        ];
        const route = useRoute()
        const user = getUser()
        console.log(route.params.id)
        const selectedCategory = ref(route.params.id);
        const find = categories.find(c => c.id == route.params.id)
        const display = ref(find.name);
        const sortOption = ref('default');
        const products = ref([]);
        const loading = ref(false);

        // Fetch products based on the category
        const fetchProducts = async () => {
            loading.value = true;
            try {
                const response = await getProductbyCategories(selectedCategory.value);
                products.value = response;
                response.forEach((product) => {
                    status.value[product.id] = true;
                });
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                loading.value = false;
            }
        };

        // Fetch products on component mount
        onMounted(fetchProducts);

        // Add to cart function
        const addtoCart = async (cartstatus, productid, qty, userfid) => {
            status.value[productid] = false;

            try {
                await AddToCart(cartstatus, productid, qty, user);
                sharedStae.increment();
            } catch (error) {
                console.error('Error adding to cart:', error.message);
            } finally {
                status.value[productid] = true;
            }
        };

        // Update category and fetch products
        const fetchProductsByCategory = (index) => {
            display.value = categories[index].name;
            fetchProducts();
        };

        // Reset to default category
        const resetCategory = () => {
            selectedCategory.value = 'Macbook';
            display.value = 'Macbook';
            fetchProducts();
        };

        // Sort products dynamically
        const sortedProducts = computed(() => {
            if (sortOption.value === 'low-to-high') {
                return [...products.value].sort((a, b) => a.basePrice - b.basePrice);
            } else if (sortOption.value === 'high-to-low') {
                return [...products.value].sort((a, b) => b.basePrice - a.basePrice);
            }
            return products.value;
        });

        return {
            url,
            categories,
            selectedCategory,
            display,
            sortOption,
            products,
            sortedProducts,
            fetchProductsByCategory,
            resetCategory,
            addtoCart,
            status,
            loading,
        };
    },
};
</script>
