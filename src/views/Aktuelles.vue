<template>
  <Title
    title="Aktuelles"
    subtitle="Spielplan von Heidenheim und Ausfahrten"
  ></Title>
  <div class="mt-5">
    <v-row v-if="!loading && !isError">
      <v-col
        v-if="display.smAndDown.value"
        cols="12"
        md="6"
        class="d-flex justify-center"
        @click="
          showPreviousMatches
            ? (showPreviousMatches = false)
            : (showPreviousMatches = true)
        "
      >
        <v-btn color="tertiary" variant="tonal">
          {{
            showPreviousMatches
              ? "Frühere Spiele ausblenden"
              : "Frühere Spiele laden"
          }}
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        md="6"
        v-for="(item, index) in matchData"
        :key="index"
        class="spiele-cols"
      >
        <div
          v-if="
            display.mdAndUp.value ||
            index >= amountOfFinishedMatches - 1 ||
            showPreviousMatches
          "
        >
          <v-table
            theme="dark"
            class="bg-transparent my-2"
            style="border: 1px solid rgb(31, 46, 62)"
          >
            <tbody>
              <tr>
                <td colspan="2">
                  <div class="d-flex justify-space-between align-center">
                    <span class="text-left">
                      {{ item.spieltag }}
                    </span>
                    <span
                      v-if="display.xs.value && item.isFinished"
                      class="text-right"
                    >
                      Endergebnis
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-left">
                  <div class="d-flex justify-space-between align-center">
                    <div class="d-flex justify-start align-center">
                      <img
                        :src="item.team1.logo"
                        :alt="`Logo von ${item.team1.name}`"
                        class="mr-3 club-logo"
                      />
                      <span
                        :class="
                          item.isFinished &&
                          item.results.final.team1 > item.results.final.team2
                            ? 'underline'
                            : ''
                        "
                        >{{ item.team1.name }}</span
                      >
                    </div>
                    <span v-if="item.isFinished">
                      {{ item.results.final.team1 }}
                    </span>
                  </div>
                </td>
                <td
                  rowspan="2"
                  class="date-time"
                  :class="
                    display.xs.value && !item.isFinished ? 'not-finished' : ''
                  "
                  :style="
                    display.xs.value && item.isFinished ? 'display: none' : ''
                  "
                  style="border: 0"
                >
                  <div v-if="!item.isFinished" class="text-center">
                    {{ item.dateTime.date }}<br />
                    {{ item.dateTime.time }}
                  </div>
                  <div v-else-if="display.smAndUp.value" class="text-center">
                    Endergebnis
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-left">
                  <div class="d-flex justify-space-between align-center">
                    <div class="d-flex justify-start align-center">
                      <img
                        :src="item.team2.logo"
                        :alt="`Logo von ${item.team2.name}`"
                        class="mr-3 club-logo"
                      />
                      <span
                        :class="
                          item.isFinished &&
                          item.results.final.team2 > item.results.final.team1
                            ? 'underline'
                            : ''
                        "
                        >{{ item.team2.name }}</span
                      >
                    </div>
                    <span v-if="item.isFinished">
                      {{ item.results.final.team2 }}
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
          <div
            v-if="
              ausfahrten.map((el) => el.spieltag).includes(item.spieltagNumber)
            "
            class="text-green d-flex justify-space-between align-center"
          >
            <div class="d-flex align-center">
              <v-icon
                v-if="item.isFinished"
                icon="mdi-check"
                class="mr-1"
              ></v-icon>
              <span v-if="item.isFinished">Ausfahrt</span>
              <span v-else>Ausfahrt geplant</span>
            </div>
            <v-btn
              color="green"
              variant="tonal"
              @click="openModal(item.spieltagNumber)"
              v-if="
                ausfahrten.find((el) => el.spieltag === item.spieltagNumber)
                  .hasBericht
              "
            >
              Zum Bericht
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <div v-else-if="isError">Fehler: Konnte Spielplan nicht laden</div>
    <div v-else-if="loading">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
  </div>
  <div v-if="showBerichtModal" class="bericht-overlay">
    <v-btn
      icon="mdi-close"
      variant="elevated"
      size="x-small"
      color="tertiary"
      class="position-sticky align-self-end"
      style="top: 20px; right: 20px; z-index: 20000"
      @click="closeModal"
    ></v-btn>
    <h1 class="pa-4">{{ currentAusfahrt.title }}</h1>
    <ImageCarousel
      style="max-width: 800px"
      class="px-4"
      :slider-images="currentAusfahrt.images"
    ></ImageCarousel>
    <div style="max-width: 800px" class="pa-4 mb-16" v-html="bericht"></div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import Title from "@/components/Title.vue";
import axios from "axios";
import { useDisplay } from "vuetify";
import MarkdownIt from "markdown-it";
import ImageCarousel from "@/views/ImageCarousel.vue";

const display = useDisplay();
const isError = ref(false);
const matchData = ref([]);
const loading = ref(true);
const showBerichtModal = ref(false);
const markdownContent = ref("");
const bericht = ref("");
const amountOfFinishedMatches = ref(0);
const showPreviousMatches = ref(false);

let currentAusfahrt = reactive({});

const ausfahrten = [
  {
    spieltag: 2,
    hasBericht: true,
    images: ["./berichte/fotos/2-1.webp", "./berichte/fotos/2-2.webp"],
    title: "Ausfahrt Heimspiel Heidenheim gegen Hoffenheim",
  },
  {
    spieltag: 3,
    hasBericht: false,
    images: [],
    title: "",
  },
];

onMounted(() => {
  axios
    .get("https://api.openligadb.de/getmatchdata/bl1/2023/Heidenheim")
    .then((response) => {
      if (response.data.length > 0) {
        for (const element of response.data) {
          const formattedDateTime = formatDateAndTime(element.matchDateTime);
          if (element.matchIsFinished) {
            amountOfFinishedMatches.value++;
          }
          matchData.value.push({
            dateTime: formattedDateTime,
            spieltag: element.group.groupName,
            spieltagNumber: element.group.groupOrderID,
            team1: {
              name: element.team1.teamName,
              logo:
                element.team1.shortName === "Köln"
                  ? "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/1._FC_Koeln_Logo_2014%E2%80%93.svg/211px-1._FC_Koeln_Logo_2014%E2%80%93.svg.png"
                  : element.team1.teamIconUrl,
            },
            team2: {
              name: element.team2.teamName,
              logo:
                element.team2.shortName === "Köln"
                  ? "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/1._FC_Koeln_Logo_2014%E2%80%93.svg/211px-1._FC_Koeln_Logo_2014%E2%80%93.svg.png"
                  : element.team2.teamIconUrl,
            },
            isFinished: element.matchIsFinished,
            results:
              element.matchResults.length > 0
                ? getResults(element.matchResults)
                : {},
          });
        }
      } else {
        isError.value = true;
      }
      loading.value = false;
    })
    .catch((error) => {
      isError.value = true;
      console.log(error);
      loading.value = false;
    });
});

const months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const weekdays = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

function formatDateAndTime(date) {
  const d = new Date(date);
  const year = d.getFullYear(); // 2019
  const day = d.getDate(); // 23
  const month = months[d.getMonth()];
  const weekday = weekdays[d.getDay()];
  const hour = d.getHours();
  const minute = d.getMinutes();

  return {
    date: weekday + ", " + day + "." + (d.getMonth() + 1) + "." + year,
    time: hour + ":" + minute + " Uhr",
  };
}

function getResults(results) {
  const final = results.find((el) => el.resultTypeID === 2);
  const half = results.find((el) => el.resultTypeID === 1);
  return {
    final: {
      team1: final.pointsTeam1,
      team2: final.pointsTeam2,
      full: final.pointsTeam1 + ":" + final.pointsTeam2,
    },
    half: {
      team1: half.pointsTeam1,
      team2: half.pointsTeam2,
      full: half.pointsTeam1 + ":" + half.pointsTeam2,
    },
  };
}

function openModal(spieltag) {
  showBerichtModal.value = true;
  fetchMarkdownContent(spieltag);
}

function closeModal() {
  showBerichtModal.value = false;
}

async function fetchMarkdownContent(spieltag) {
  currentAusfahrt = ausfahrten.find((el) => el.spieltag === spieltag);
  try {
    const response = await fetch(`/berichte/${spieltag}.md`);
    markdownContent.value = await response.text();
    renderMarkdown();
  } catch (error) {
    console.error("Error fetching Markdown content:", error);
  }
}

function renderMarkdown() {
  const md = new MarkdownIt();
  bericht.value = md.render(markdownContent.value);
}
</script>

<style scoped>
.date-time {
  width: 33%;
}

.club-logo {
  width: 30px;
  height: auto;
}

.underline {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.bericht-overlay {
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
  overflow-y: scroll;
  overscroll-behavior: contain;
}

.spiele-cols:empty {
  display: none;
}

@media (max-width: 768px) {
  .date-time {
    width: 50%;
  }

  .date-time.not-finished {
    width: 30%;
  }

  .club-logo {
    width: 25px;
  }
}
</style>
