<template>
  <div style="width: 100%">
    <div class="d-flex justify-space-between align-center" style="gap: 20px">
      <v-btn
        v-if="display.mdAndUp.value"
        icon="mdi-arrow-left"
        color="secondary"
        @click="prevSlide"
      ></v-btn>
      <v-carousel
        :show-arrows="false"
        hide-delimiter-background
        :hide-delimiters="display.smAndDown.value"
        theme="dark"
        :height="display.smAndDown.value ? (display.xs.value ? 250 : 400) : 600"
        :model-value="sliderValue"
      >
        <v-carousel-item
          v-for="img in sliderImages"
          :src="img"
        ></v-carousel-item>
      </v-carousel>
      <v-btn
        v-if="display.mdAndUp.value"
        icon="mdi-arrow-right"
        color="secondary"
        @click="nextSlide"
      ></v-btn>
    </div>
    <div
      v-if="display.smAndDown.value"
      class="d-flex justify-space-around align-center mt-3"
    >
      <v-btn icon="mdi-arrow-left" color="secondary" @click="prevSlide"></v-btn>
      <span> {{ sliderValue + 1 }} / {{ sliderImages.length }} </span>
      <v-btn
        icon="mdi-arrow-right"
        color="secondary"
        @click="nextSlide"
      ></v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";

const display = useDisplay();

const props = defineProps({
  sliderImages: Array,
});

const sliderValue = ref(0);

function prevSlide() {
  sliderValue.value =
    sliderValue.value === 0
      ? props.sliderImages.length - 1
      : sliderValue.value - 1;
}

function nextSlide() {
  sliderValue.value =
    sliderValue.value === props.sliderImages.length - 1
      ? 0
      : sliderValue.value + 1;
}
</script>
