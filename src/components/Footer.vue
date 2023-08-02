<template>
  <footer class="bg-primary">
    <div class="container">
      <v-row no-gutters align="center" justify="space-between">
        <v-col cols="6" md="4">
          <span class="text-caption text-tertiary">
            © Red-Blue Swabia 1846
          </span>
        </v-col>
        <v-col cols="4" class="hidden-sm-and-down logo-container">
          <img class="logo" @click="redirectHome" src="/rbs.svg" />
        </v-col>
        <v-col cols="6" md="4" class="footer-links">
          <v-btn
            href="https://instagram.com/red_blue_swabia_1846"
            variant="text"
            icon="mdi-instagram"
            size="small"
            color="tertiary"
          ></v-btn>
          <!--          <v-btn
            href="mailto:red-blue-swabia@gmx.de"
            variant="text"
            icon="mdi-email-outline"
            size="small"
            color="tertiary"
          ></v-btn>-->
          <router-link
            class="link text-caption text-tertiary ml-2"
            to="./impressum"
          >
            Impressum
          </router-link>
        </v-col>
      </v-row>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function redirectHome() {
  router.push("/");
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 100px;
}

.container {
  max-width: var(--max-container-width);
  padding: 0 var(--container-padding);
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  cursor: pointer;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.footer-links {
  display: flex;
  justify-content: end;
  align-items: center;
}

.link {
  text-decoration: none;
}
</style>
