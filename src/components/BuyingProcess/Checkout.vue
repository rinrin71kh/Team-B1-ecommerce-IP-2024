<template>
    <div class="checkout">
        <h1>Checkout</h1>

        <!-- Cart Summary -->
        <section class="cart-summary">
            <h2>Cart Summary</h2>
            <ul>
                <li v-for="item in cartItems" :key="item.id">
                    <img :src="item.image" alt="Product Image" width="50" />
                    <div>
                        <strong>{{ item.name }}</strong>
                        <p>Price: ${{ item.price }} x {{ item.quantity }}</p>
                    </div>
                </li>
            </ul>
            <p>Total Items: {{ cartStore.totalItems }}</p>
            <p>Cart Total: ${{ cartStore.cartTotalPrice }}</p>
        </section>

        <!-- Shipping Details -->
        <section class="shipping-details flex flex-col">
            <h2>Shipping Details</h2>
            <div class="flex items-center gap-2">
                <input type="checkbox" v-model="pizza" class="bg-red-200 border-2 border-black " inputId="ingredient1"
                    name="pizza" value="Cheese" />
                <label for="ingredient1"> ភ្នំពេញ </label>
            </div>
            <div class="">
                <label for="province">ដឹកតាមបណ្តាខេត្ត:</label>
                <AutoComplete v-model="value2" :suggestions="items" @complete="search" placeholder="ជ្រើសរើសខេត្ត"
                    dropdown />
                <div>
                </div>
                <input v-model="shippingDetails.address" placeholder="សង្កាត់​ ខណ្ឌ" required />
                <div>
                    <label for="province">មធ្យោបាយដឹកជញ្ជូន:</label>
                    <AutoComplete v-model="value2" :suggestions="items" @complete="search" placeholder="Vireak buntham"
                        dropdown />
                </div>
                <input v-model="shippingDetails.city" placeholder="សាខាមធ្យោបាយដឹកជញ្ជូន" required />
            </div>
        </section>

        <!-- Apply Discount Code -->
        <section class="discount-code">
            <h2>Apply Discount Code</h2>
            <form @submit.prevent="applyDiscountCode">
                <input v-model="discountCode" placeholder="Enter Discount Code" />
                <button type="submit">Apply</button>
            </form>
        </section>

        <!-- Order Summary -->
        <section class="order-summary">
            <h2>Order Summary</h2>
            <p>Total Price: ${{ cartStore.cartTotalPrice }}</p>
            <p>Shipping Cost: ${{ cartStore.shippingCost || 0 }}</p>
            <p>Discount: %{{ cartStore.discount.discountPercentage }}</p>
            <h3>Final Price: ${{ cartStore.finalOrderPrice }}</h3>
            <button @click="placeOrder">Place Order</button>
        </section>

        <!-- Billing Details -->
        <section class="billing-details">
            <h2>Billing Details</h2>
            <h2>Total: {{ cartStore.finalOrderPrice }}</h2>
            <form @submit.prevent="handleBillingSubmit">
                <label>Upload your transaction screenshot</label>
                <input type="file" placeholder="Card Number" required />
                <!-- <button type="submit">Save Billing Details</button> -->
            </form>
        </section>

    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';
import { ref } from 'vue';
import AutoComplete from 'primevue/autocomplete';
import InputText from 'primevue/inputtext';

const cartStore = useCartStore();
const {
    cartItems,
    shippingDetails,
    billingDetails,
    orderSummary,
    finalOrderPrice,
    setShippingDetails,
    setBillingDetails,
    placeOrder,
} = cartStore;

var discountCode = '';

// Form submission handlers
const handleShippingSubmit = () => {
    setShippingDetails({ ...shippingDetails });
};

const handleBillingSubmit = () => {
    setBillingDetails({ ...billingDetails });
};

const applyDiscountCode = () => {
    try {
        cartStore.applyDiscount(discountCode);
        alert('Discount applied successfully!');
    } catch (error) {
        alert(error.message);
    }
};

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const items = ref([]);

const search = () => {
    items.value = ['a', 'b', 'c', 'd', 'e', 'f'];
}
</script>

<style>
.checkout {
    max-width: 800px;
    margin: 0 auto;
}

form {
    margin-bottom: 20px;
}

form input {
    display: block;
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
}

button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

ul li img {
    margin-right: 10px;
}

.cart-summary,
.shipping-details,
.billing-details,
.discount-code,
.order-summary {
    margin-bottom: 30px;
}
</style>