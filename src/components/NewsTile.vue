<template>
  <v-card color="primary">
    <v-row no-gutters style="height: 100%">
      <v-col cols="12" sm="6" style="height: 100%">
        <img
          :src="image"
          style="width: 100%; height: 250px; object-position: center"
          :style="isNewsletter ? 'object-fit: contain;' : 'object-fit: cover;'"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex flex-column justify-space-between h-100">
          <div>
            <v-card-title class="text-h5 text-wrap">
              {{ title }}
            </v-card-title>

            <v-card-subtitle>
              {{ subtitle }} <br />
              Erschienen am {{ erschienen }}
            </v-card-subtitle>
          </div>

          <v-card-actions class="d-flex justify-end">
            <v-btn
              class="ms-2"
              variant="tonal"
              append-icon="mdi-arrow-top-right"
              color="tertiary"
              target="_blank"
              width="100%"
              :href="link"
            >
              {{ linkText }}
            </v-btn>
          </v-card-actions>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  erschienen: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
    default: "Zum Artikel",
  },
  isNewsletter: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
