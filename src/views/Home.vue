<template>
  <Title
    title="Red-Blue Swabia 1846"
    subtitle="Der erste offizielle Fanclub des 1. FC Heidenheim aus Oberschwaben"
  ></Title>
  <div class="my-10">
    Red-Blue Swabia wurde gegründet aus guten Freunden und soll eine
    Anlaufstelle für leidenschaftliche FCH-Fans in unserer Region sein.
  </div>
  <div class="mb-3">Unsere erste Mitgliederversammlung:</div>
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
        :cover="true"
        alt="Bild einer Vereinssitzung"
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
    <v-btn icon="mdi-arrow-right" color="secondary" @click="nextSlide"></v-btn>
  </div>
  <div class="mt-10">
    Wenn du unserem Fanclub beitreten möchtest, schau gerne
    <router-link to="./mitglied-werden">hier</router-link> vorbei. <br /><br />
    Gerne kannst du dir im Folgenden auch unsere Vereinssatzung durchlesen.
  </div>
  <v-btn
    color="secondary"
    href="./vereinssatzung_red-blue-swabia.pdf"
    target="_blank"
    class="mt-5 mb-10"
  >
    Vereinssatzung downloaden
  </v-btn>
</template>

<script setup>
import { ref } from "vue";
import Title from "@/components/Title.vue";
import { useDisplay } from "vuetify";

const display = useDisplay();
const sliderValue = ref(0);

const sliderImages = [
  "./vereinssitzung.webp",
  "./vereinssitzung2.webp",
  "./vereinssitzung3.webp",
];

function prevSlide() {
  sliderValue.value =
    sliderValue.value === 0 ? sliderImages.length - 1 : sliderValue.value - 1;
}

function nextSlide() {
  sliderValue.value =
    sliderValue.value === sliderImages.length - 1 ? 0 : sliderValue.value + 1;
}
</script>

<style scoped></style>
