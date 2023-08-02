<template>
  <v-app>
    <Navbar></Navbar>
    <main>
      <router-view />
    </main>
    <Footer></Footer>
  </v-app>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>
html {
  font-family: "Merriweather", "Roboto", sans-serif !important;
}

:root {
  --max-container-width: 1300px;
  --container-padding: 50px;
}

main {
  max-width: var(--max-container-width);
  width: 100%;
  margin: 50px auto;
  padding: 0 var(--container-padding);
  min-height: calc(100vh - 320px);
}

.v-btn {
  text-transform: none;
  font-weight: 600;
}

@media (max-width: 768px) {
  :root {
    --container-padding: 30px;
  }
  main {
    margin: 20px auto;
    min-height: calc(100vh - 250px);
  }
}

a {
  color: rgb(122, 165, 214);
}

img {
  width: 100%;
  height: auto;
}
</style>
