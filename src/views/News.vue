<template>
  <Title
    title="News"
    subtitle="Aktuelle News über unseren Fanclub und den 1. FC Heidenheim"
  ></Title>
  <v-row class="my-6">
    <v-col
      v-for="item in news.reverse()"
      :key="item.erschienen"
      cols="12"
      md="6"
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
</template>

<script setup>
import Title from "@/components/Title.vue";
import NewsTile from "@/components/NewsTile.vue";

const news = [
  {
    image: "/berichte/fotos/2-1.webp",
    title: "Was der SV Winterstettenstadt besser gemacht hat als der FCH",
    subtitle: "Artikel auf FuPa",
    erschienen: "29.08.2023",
    link: "https://www.fupa.net/news/was-der-sv-winterstettenstadt-besser-gemacht-hat-als-der-fch-2970328?utm_source=fupa&utm_medium=sharebutton&utm_campaign=share_news",
    linkText: "Zum Artikel",
    isNewsletter: false,
  },
  {
    image: "/rbs.svg",
    title: "Red-Blue Swabia Newsletter #1",
    subtitle: "von Stefan Wiedmann, Schriftführer",
    erschienen: "19.09.2023",
    link: "/newsletter-1.pdf",
    linkText: "Zum Newsletter",
    isNewsletter: true,
  },
];
</script>
