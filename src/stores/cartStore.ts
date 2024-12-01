import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cartItems: [] as Array<{
      id: number;
      name: string;
      price: number;
      quantity: number;
      image: string;
    }>,
    shippingDetails: {} as {
      name: string;
      address: string;
      city: string;
      postalCode: string;
      country: string;
    },
    billingDetails: {} as {
      cardNumber: string;
      expiryDate: string;
      cvv: string;
      nameOnCard: string;
    },
    discountCode: '' as string,
    cartTotalPrice : 0 as number,
    orderSummary: null as {
      totalPrice: number;
      shippingCost: number;
      discount: number;
      finalPrice: number;
    } | null,
  }),
  getters: {
    cartTotalPrice: (state) => {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    totalItems: (state) => {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    finalOrderPrice: (state) => {
      if (!state.orderSummary) return state.cartTotalPrice;
      return state.orderSummary.finalPrice;
    },
  },
  actions: {
    // Add product to the cart
    addToCart(product) {
      if (!product || !product.id) {
        console.error("Invalid product passed to addToCart:", product);
        return;
      }
      const existingItem = this.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
      console.log("Cart items:", this.cartItems); // Debug log
      console.log(localStorage.getItem('cartItems'));
    },    

    // Remove product from the cart
    removeFromCart(productId: number) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    },

    // Update product quantity
    updateQuantity(productId: number, quantity: number) {
      const item = this.cartItems.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },

    // Apply a discount code
    applyDiscount(code: string) {
      // Dummy validation logic
      if (code === 'SAVE10') {
        const discount = this.cartTotalPrice * 0.1; // 10% discount
        this.discountCode = code;
        this.orderSummary = {
          totalPrice: this.cartTotalPrice,
          shippingCost: 10, // Flat rate
          discount,
          finalPrice: this.cartTotalPrice + 10 - discount,
        };
      } else {
        throw new Error('Invalid discount code');
      }
    },

    displayData(){
      console.log('Cart Data:', {
        cartItems: this.cartItems,
      });
    },

    // Set shipping details
    setShippingDetails(details: { name: string; address: string; city: string; postalCode: string; country: string }) {
      this.shippingDetails = details;
    },

    // Set billing details
    setBillingDetails(details: { cardNumber: string; expiryDate: string; cvv: string; nameOnCard: string }) {
      this.billingDetails = details;
    },

    // Place order
    placeOrder() {
      if (!this.shippingDetails || !this.billingDetails || this.cartItems.length === 0) {
        throw new Error('Missing required details to place the order');
      }

      // Example API integration or order submission logic
      console.log('Order placed successfully!', {
        cartItems: this.cartItems,
        shippingDetails: this.shippingDetails,
        billingDetails: this.billingDetails,
        total: this.finalOrderPrice,
      });

      // Clear the cart after successful order
      this.cartItems = [];
      this.discountCode = '';
      this.orderSummary = null;
    },
  },
});
