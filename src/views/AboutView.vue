<template>
  <div>
    <div v-for="(item, index) in items" :key="item.id">
      <!-- Pass the item and index to the child -->
      <HomeView 
        :item="item" 
        :index="index" 
        @update="updateItem"
      />
    </div>
  </div>
</template>

<script>
import HomeView from './HomeView.vue';
export default {
  components: {
    HomeView,
  },
  data() {
    return {
      items: [
        { id: 1, value: false },
        { id: 2, value: false },
      ],
    };
  },
  methods: {
    updateItem(index, newValue) {
      // Directly update the item's value while ensuring reactivity
      this.items[index].value = newValue;
      // OR create a new array to trigger reactivity in some edge cases
      // this.items = this.items.map((item, i) =>
      //   i === index ? { ...item, value: newValue } : item
      // );
    },
  },
};
</script>
