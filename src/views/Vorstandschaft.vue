<template>
  <Title
    title="Vorstandschaft"
    subtitle="Die Vorstandschaft hinter dem Fanclub"
  ></Title>
  <div class="mt-6">
    <v-row>
      <v-col v-for="item in ausschuss" :key="item.name" cols="12" sm="4" md="3">
        <v-card color="primary">
          <img :src="item.image" style="width: 100%; height: auto" />
          <v-card-title class="text-tertiary"> {{ item.name }} </v-card-title>
          <v-card-subtitle class="text-tertiary mb-4">
            {{ item.position }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import Title from "@/components/Title.vue";

const ausschuss = [
  {
    name: "Sebastian Christ",
    position: "1. Vorstand",
    image: "/ausschuss/sebastian-christ.webp",
  },
  {
    name: "Fabian Wiedmann",
    position: "2. Vorstand",
    image: "/ausschuss/fabian-wiedmann.webp",
  },
  {
    name: "Stefan Wiedmann",
    position: "Schriftführer",
    image: "/ausschuss/stefan-wiedmann.webp",
  },
  {
    name: "Gabriel Ruß",
    position: "Kassier",
    image: "/ausschuss/gabriel-ruß.webp",
  },
  {
    name: "Alexander Heber",
    position: "Beisitzer",
    image: "/ausschuss/alexander-heber.webp",
  },
  {
    name: "Julian Maucher",
    position: "Beisitzer",
    image: "/ausschuss/julian-maucher.webp",
  },
  {
    name: "Martin Müller",
    position: "Beisitzer",
    image: "/ausschuss/martin-muller.webp",
  },
];
</script>
