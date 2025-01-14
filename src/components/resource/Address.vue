<template>

  <v-card prepend-icon="mdi-map-marker" title="Deliver to">
    <v-card-text>
      <v-row dense>
        <v-col cols="12" md="4" sm="6">
          <v-text-field label="Full Name*" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4" sm="6">
          <v-text-field label="Email*" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4" sm="6">
          <v-text-field hint="Telegram connected is better" label="Phone Number*" required></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-autocomplete  v-model="address" :items="provinces" label="Choose City" auto-select-first multiple></v-autocomplete>
        </v-col>

        <v-col cols="12" md="4" sm="6">
          <v-text-field hint="e.g. #712B St.25BT Sangkat Beoung Tum Pun Khan Mean Chey Phnom Penh" label="Full Address"
            type="text" persistent-hint required></v-text-field>
        </v-col>

      </v-row>

      <small class="text-caption text-medium-emphasis">*By filling this you are agreed to share your personal
        information.</small>
    </v-card-text>

    <v-divider></v-divider>

  </v-card>


</template>

<script>
export default {
  props: {
    dialog: Boolean
  },
  data() {
    return {
      provinces: [
        "Phnom Penh",
        "Kandal",
        "Banteay Meanchey",
        "Battambang",
        "Kampong Cham",
        "Kampong Chhnang",
        "Kampong Speu",
        "Kampong Thom",
        "Kampot",
        "Kep",
        "Koh Kong",
        "Kratie",
        "Mondulkiri",
        "Oddar Meanchey",
        "Pailin",
        "Preah Sihanouk",
        "Preah Vihear",
        "Prey Veng",
        "Pursat",
        "Ratanakiri",
        "Siem Reap",
        "Stung Treng",
        "Svay Rieng",
        "Takeo",
        "Tbong Khmum"
      ]
    }
  },
  props: ['modelValue'], // Bind to v-model from parent
  computed: {
    address: {
      get() {
        return this.modelValue; // Pass value to parent
      },
      set(value) {
        this.$emit('update:modelValue', value); // Emit changes to parent
      },
    },
  },
};
</script>