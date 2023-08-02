<template>
  <Title
    title="Mitglied werden"
    subtitle="Werde Mitglied unseres Fanclubs"
  ></Title>
  <div class="my-10">
    <div class="mb-3 d-flex justify-start align-center iteration">
      <div class="red-dot">1</div>
      <span> Mitgliedsantrag downloaden und ausfüllen </span>
    </div>
    <div class="d-flex justify-start align-center iteration">
      <div class="red-dot">2</div>
      <span>
        Den ausgefüllten Mitgliedsantrag an folgende Mail-Adresse senden:
        <a
          href="mailto:red-blue-swabia@gmx.de?subject=Antrag%20auf%20Mitgliedschaft"
        >
          red-blue-swabia@gmx.de
        </a>
      </span>
    </div>
  </div>
  <v-btn color="secondary" href="./mitgliedsantrag.docx" target="_blank">
    Mitgliedsantrag downloaden
  </v-btn>
</template>

<script setup>
import Title from "@/components/Title.vue";
</script>

<style scoped>
.red-dot {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--v-theme-secondary));
}

.iteration {
  gap: 10px;
}
</style>
