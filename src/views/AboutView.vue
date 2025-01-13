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
          <v-autocomplete
            :items="provinces"
            label="Choose City" auto-select-first multiple></v-autocomplete>
        </v-col>

        <v-col cols="12" md="4" sm="6">
          <v-text-field hint="e.g. #712B St.25BT Sangkat Beoung Tum Pun Khan Mean Chey Phnom Penh" label="Full Address"
            type="text" persistent-hint required></v-text-field>
        </v-col>

      </v-row>

      <small class="text-caption text-medium-emphasis">*By filling this you are agreed to share your personal information.</small>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

      <v-btn color="primary" text="Save" variant="tonal" @click="dialog = false"></v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
export default {
  setup() {
    const provinces = [
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
    ];

    return {
      provinces,
      khqrString,
      sourceInfo,
    };
  }
};
</script>