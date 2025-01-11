<template>
  <div>
    <button @click="toggleValue">
      {{ localValue ? 'On' : 'Off' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      localValue: this.item.value, // Create a local copy of the value
    };
  },
  methods: {
    toggleValue() {
      this.localValue = !this.localValue; // Update local state
      this.$emit('update', this.index, this.localValue); // Notify parent
    },
  },
};
</script>
