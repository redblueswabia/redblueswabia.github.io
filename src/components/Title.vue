<template>
  <div :class="display.smAndDown.value ? 'mb-5' : 'mb-8'">
    <span :class="display.smAndDown.value ? 'text-h4' : 'text-h3'">
      {{ title }}
    </span>
  </div>
  <h1 :class="display.smAndDown.value ? 'text-h6' : 'text-h5'">
    {{ subtitle }}
  </h1>
</template>

<script setup>
import { useDisplay } from "vuetify";

defineProps({
  title: {
    type: String,
    default: "Red-Blue Swabia 1846",
  },
  subtitle: {
    type: String,
    default:
      "Der erste offizielle Fanclub des 1. FC Heidenheim aus Oberschwaben",
  },
});

const display = useDisplay();
</script>

<style scoped>
span {
  padding: 0 0 8px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}
span::before {
  content: "";
  position: absolute;
  bottom: 12px;
  width: 105%;
  height: 15px;
  background: rgba(var(--v-theme-secondary), 0.7);
  z-index: -1;
}
</style>
