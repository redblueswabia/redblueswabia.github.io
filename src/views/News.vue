<template>
  <Title
    title="News"
    subtitle="Aktuelle News über unseren Fanclub und den 1. FC Heidenheim"
  ></Title>
  <v-row class="my-6">
    <v-col cols="12" md="6">
      <v-card color="primary">
        <v-row no-gutters>
          <v-col cols="12" sm="6">
            <img
              src="/berichte/fotos/2-1.webp"
              style="
                width: 100%;
                height: 100%;
                object-position: center;
                object-fit: cover;
              "
            />
          </v-col>
          <v-col cols="12" sm="6">
            <div class="d-flex flex-column justify-space-between h-100">
              <div>
                <v-card-title class="text-h5 text-wrap">
                  Was der SV Winterstettenstadt besser gemacht hat als der FCH
                </v-card-title>

                <v-card-subtitle>
                  Artikel auf FuPa <br />
                  Erschienen am 29.08.2023
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
                  href="https://www.fupa.net/news/was-der-sv-winterstettenstadt-besser-gemacht-hat-als-der-fch-2970328?utm_source=fupa&utm_medium=sharebutton&utm_campaign=share_news"
                >
                  Zum Artikel
                </v-btn>
              </v-card-actions>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import Title from "@/components/Title.vue";
</script>
