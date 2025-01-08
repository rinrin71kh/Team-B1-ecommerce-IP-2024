import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const sharedState = reactive({
  QRpayComponent: null, // Shared variable
});


export const useNotifyStore = defineStore('NotifyStore', {
  state: () => ({
    sharedValue: 0, // The shared variable
  }),
  actions: {
    increment() {
      this.sharedValue += 1; // Increment the shared value
    },
    decrement() {
      this.sharedValue -= 1; // Decrement the shared value
    },
  },
});
