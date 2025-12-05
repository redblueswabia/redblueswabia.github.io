<template>
  <Title
    title="Red-Blue Swabia 1846"
    subtitle="Der erste offizielle Fanclub des 1. FC Heidenheim aus Oberschwaben"
  ></Title>
  <div class="my-10">
    Red-Blue Swabia wurde gegründet aus guten Freunden und soll eine
    Anlaufstelle für leidenschaftliche FCH-Fans in unserer Region sein.
  </div>
  <div>Du willst dabei sein? Einfach Antrag herunterladen und uns ausgefüllt zukommen lassen!</div>
  <v-btn
    color="secondary"
    href="./mitgliedsantrag.docx"
    target="_blank"
    class="mt-2 mb-10"
  >
    Hier Mitgliedsantrag herunterladen!
  </v-btn>
  <Title title="News"></Title>
  <v-row class="my-6">
    <v-col
      v-for="item in news.reverse()"
      :key="item.erschienen"
      cols="12"
      :md="item.fullWidth ? 12 : 6"
    >
      <NewsTile
        :image="item.image"
        :erschienen="item.erschienen"
        :link="item.link"
        :link-text="item.linkText"
        :subtitle="item.subtitle"
        :title="item.title"
        :is-newsletter="item.isNewsletter"
      />
    </v-col>
  </v-row>
  <!--  <div class="mb-3">Unsere erste Mitgliederversammlung:</div>
  <ImageCarousel :slider-images="sliderImages" />-->
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
import NewsTile from "@/components/NewsTile.vue";

const display = useDisplay();
const sliderValue = ref(0);

const sliderImages = [
  "./vereinssitzung.webp",
  "./vereinssitzung2.webp",
  "./vereinssitzung3.webp",
];

const news = [
  {
    image: "/berichte/fotos/2-1.webp",
    title: "Was der SV Winterstettenstadt besser gemacht hat als der FCH",
    subtitle: "Artikel auf FuPa",
    erschienen: "29.08.2023",
    link: "https://www.fupa.net/news/was-der-sv-winterstettenstadt-besser-gemacht-hat-als-der-fch-2970328?utm_source=fupa&utm_medium=sharebutton&utm_campaign=share_news",
    linkText: "Zum Artikel",
    isNewsletter: false,
    fullWidth: false,
  },
  /*{
    image: "/rbs.svg",
    title: "Red-Blue Swabia Newsletter #1",
    subtitle: "von Stefan Wiedmann, Schriftführer",
    erschienen: "19.09.2023",
    link: "/newsletter-1.pdf",
    linkText: "Zum Newsletter",
    isNewsletter: true,
    fullWidth: false,
  },*/
  {
    image: "/berichte/fotos/spendenubergabe.jpg",
    title: "Neujahrsfeier und Spendenübergabe",
    subtitle: "von Stefan Wiedmann, Schriftführer",
    erschienen: "01.02.2025",
    link: "/newsletter-2.pdf",
    linkText: "Zum Bericht",
    isNewsletter: true,
    fullWidth: false,
  },
  {
    image: "/berichte/fotos/gv-2024-1.jpeg",
    title: "Dritte Mitgliederversammlung",
    subtitle: "von Stefan Wiedmann, Schriftführer",
    erschienen: "15.07.2025",
    link: "/dritte-mitgliederversammlung.pdf",
    linkText: "Zum Bericht",
    isNewsletter: false,
    fullWidth: false,
  },
  {
    image: "/flyer-huettenzauber-2025.webp",
    title: "Einladung zum Hüttenzauber 2025",
    subtitle: "von Stefan Wiedmann, Schriftführer",
    erschienen: "05.12.2025",
    link: "/flyer-huettenzauber-2025.webp",
    linkText: "Zum Flyer",
    isNewsletter: false,
    fullWidth: false,
  },
  {
    image: "/weihnachten.webp",
    title: "Einladung zur Weihnachtsfeier 2025",
    subtitle: "von Stefan Wiedmann, Schriftführer",
    erschienen: "05.12.2025",
    link: "/einladung-weihnachtsfeier-2025.pdf",
    linkText: "Zur Einladung",
    isNewsletter: false,
    fullWidth: true,
  },
];
</script>

<style scoped></style>
