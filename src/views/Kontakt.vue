<template>
  <Title title="Kontakt" subtitle="Nimm gerne Kontakt mit uns auf"></Title>
  <div class="my-6">
    <div class="d-flex flex-column">
      <div class="d-flex align-center">
        <div class="red-dot">
          <v-icon color="tertiary">mdi-email</v-icon>
        </div>
        <span class="ml-4">
          E-Mail:
          <a href="mailto:red-blue-swabia@gmx.de"> red-blue-swabia@gmx.de </a>
        </span>
      </div>
      <div class="d-flex align-center mt-4">
        <div class="red-dot">
          <v-icon color="tertiary">mdi-phone</v-icon>
        </div>
        <span class="ml-4">
          Telefonnummer (Sebastian Christ, 1. Vorstand):
          <a href="tel:+491737255584"> +49 173 7255584 </a>
        </span>
      </div>
    </div>
  </div>
  <h2 class="text-h5 mb-4 pt-4">Dokumente downloaden</h2>
  <v-btn
    color="secondary"
    href="./vereinssatzung_red-blue-swabia.pdf"
    target="_blank"
    class="mt-5 mb-10"
  >
    Vereinssatzung
  </v-btn>
  <v-btn
    color="secondary"
    href="./erziehungsbeauftragung.pdf"
    target="_blank"
    class="mt-5 mb-10 ml-4"
  >
    Erziehungsbeauftragung
  </v-btn>
</template>

<script setup>
import Title from "@/components/Title.vue";
</script>

<style scoped>
.red-dot {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--v-theme-secondary));
}
</style>
