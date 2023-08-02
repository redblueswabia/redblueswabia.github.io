<template>
  <header>
    <div class="bg-primary w-100 belt position-absolute"></div>
    <div class="inner-belt-container">
      <img
        class="logo"
        :class="display.smAndDown.value ? 'mobile-logo' : ''"
        @click="redirectHome"
        src="/rbs.svg"
      />
      <div class="hidden-sm-and-down navbar">
        <!--        <v-btn to="/" variant="text" :ripple="false">Home</v-btn>-->
        <v-btn to="./aktuelles" variant="text" :ripple="false">Aktuelles</v-btn>
        <v-btn to="./vorstandschaft" variant="text" :ripple="false">
          Vorstandschaft
        </v-btn>
        <v-btn to="./bilder" variant="text" :ripple="false">Bilder</v-btn>
        <v-btn to="./mitglied-werden" variant="text" :ripple="false">
          Mitglied werden
        </v-btn>
        <v-btn to="./kontakt" variant="text" :ripple="false">Kontakt</v-btn>
      </div>
      <div class="hidden-md-and-up">
        <v-btn
          @click="openDrawer"
          icon="mdi-menu"
          theme="dark"
          variant="text"
          :ripple="false"
          size="small"
        ></v-btn>
      </div>
    </div>
  </header>
  <div
    v-if="drawer"
    class="mobile-menu-overlay pt-16"
    :class="drawer ? 'open' : ''"
  >
    <v-btn
      icon="mdi-close"
      theme="light"
      variant="text"
      class="position-absolute"
      style="top: 20px; right: 20px"
      @click="closeDrawer"
    ></v-btn>
    <v-btn to="./aktuelles" @click="closeDrawer" variant="text" :ripple="false">
      Aktuelles
    </v-btn>
    <v-btn
      to="./vorstandschaft"
      @click="closeDrawer"
      variant="text"
      :ripple="false"
    >
      Vorstandschaft
    </v-btn>
    <v-btn to="./bilder" @click="closeDrawer" variant="text" :ripple="false">
      Bilder
    </v-btn>
    <v-btn
      to="./mitglied-werden"
      @click="closeDrawer"
      variant="text"
      :ripple="false"
      >Mitglied werden</v-btn
    >
    <v-btn to="./kontakt" @click="closeDrawer" variant="text" :ripple="false"
      >Kontakt</v-btn
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify";

const router = useRouter();
const display = useDisplay();

const drawer = ref(false);

function redirectHome() {
  router.push("./");
}

function openDrawer() {
  drawer.value = true;
}

function closeDrawer() {
  drawer.value = false;
}
</script>

<style scoped>
header {
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.belt {
  height: 50px;
}

.inner-belt-container {
  max-width: var(--max-container-width);
  width: 100%;
  padding: 0 var(--container-padding);
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.logo {
  width: 80px;
  cursor: pointer;
}

.logo.mobile-logo {
  margin-left: calc(50% - 35px);
}

.v-btn {
  margin: 0 2px;
}

.mobile-menu-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(25px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.mobile-menu-overlay .v-btn {
  transform: translateY(-10px);
}

.mobile-menu-overlay.open .v-btn {
  transform: translateY(0px);
  transition: transform 1s 0.5s linear;
}

@media (max-width: 768px) {
  header {
    margin-top: 10px;
  }
  .logo {
    width: 70px;
  }
}
</style>
