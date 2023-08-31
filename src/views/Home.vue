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
  <ImageCarousel :slider-images="sliderImages" />
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
import ImageCarousel from "@/views/ImageCarousel.vue";

const display = useDisplay();
const sliderValue = ref(0);

const sliderImages = [
  "./vereinssitzung.webp",
  "./vereinssitzung2.webp",
  "./vereinssitzung3.webp",
];
</script>

<style scoped></style>
