<template>
  <v-row class="background-color d-flex justify-center align-center">
    <v-col cols="3" lg="3" sm="12">
      <v-autocomplete
        label="País"
        density="compact"
        hide-details
        bg-color="#23272"
        color="white"
      ></v-autocomplete>
    </v-col>
    <v-col cols="3" lg="3" sm="12" class="d-flex justify-center align-center">
      <v-autocomplete
        label="Esporte"
        density="compact"
        hide-details
        bg-color="#23272"
        color="white"
      ></v-autocomplete>
    </v-col>
    <v-col cols="3" class="d-flex justify-center align-center">
      <v-autocomplete
        label="Gênero"
        density="compact"
        hide-details
        bg-color="#23272"
        color="white"
      ></v-autocomplete>
    </v-col>
  </v-row>

  <v-row class="py-15 background">
    <v-col
      cols="12"
      lg="6"
      sm="12"
      class="d-flex justify-center align-center"
      v-for="(item, index) in controller.eventos.value"
      :key="index"
    >
      <v-card variant="outlined" height="220" width="450" class="rounded-lg">
        <v-row class="mt-2 mx-2">
          <v-chip variant="elevated" class="mb-1" size="small" color="white">
            {{ dayjs(item.day).format("DD/MM/YYYY") }} -
            {{ formattedTime(item.start_date) }}
          </v-chip>

          <v-spacer></v-spacer>

          <v-chip
            variant="elevated"
            class="mb-1"
            size="small"
            :color="item.status === 'Finished' ? 'red' : 'green'"
          >
            {{ item.status }}
          </v-chip>
        </v-row>
        <v-row
          ><v-divider class="border-opacity-100" color="white"></v-divider
        ></v-row>

        <v-card-title class="mt-2 d-flex justify-center align-center">
          {{ item.discipline_name }}
        </v-card-title>
        <v-card-subtitle class="d-flex justify-center align-center">
          {{ item.detailed_event_name }}
        </v-card-subtitle>

        <v-row class="mt-2">
          <v-col cols="5" class="d-flex justify-center align-center">
            <v-img
              class="mr-2"
              cover
              max-width="35"
              :src="
                item.competitors.length && item.competitors.length <= 2
                  ? item.competitors[0].country_flag_url
                  : null
              "
            >
            </v-img>
            {{
              item.competitors.length && item.competitors.length <= 2
                ? item.competitors[0].country_id
                : null
            }}
          </v-col>
          <v-col cols="2" class="d-flex justify-center align-center">
            <div class="text-h6">
              {{
                item.competitors.length && item.competitors.length <= 2
                  ? "X"
                  : ""
              }}
            </div>
          </v-col>
          <v-col cols="5" class="d-flex justify-center align-center">
            {{
              item.competitors.length && item.competitors.length <= 2
                ? item.competitors[1].country_id
                : null
            }}
            <v-img
              class="ml-2"
              max-width="35"
              cover
              :src="
                item.competitors.length && item.competitors.length <= 2
                  ? item.competitors[1].country_flag_url
                  : null
              "
            >
            </v-img>
          </v-col>
        </v-row>
        <v-card-actions class="mt-3">
          <v-btn
            color="white"
            text="Ver detalhes"
            block
            border
            @click="controller.dialogEvento.value = true"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-row class="d-flex justify-center align-center mt-4">
      <v-pagination
        v-model="controller.page.value"
        rounded="circle"
        density="compact"
        :length="controller.totalEventos.value"
        @update:model-value="controller.buscaEventos(controller.page.value)"
      ></v-pagination>
    </v-row>
  </v-row>
  <v-dialog
    v-model="controller.dialogEvento.value"
    width="500"
    opacity="0"
    scrollable
    class="ma-2"
  >
    <v-card class="card-color rounded-xl">
      <v-card-title class="pa-0">
        <v-toolbar flat density="compact" color="white" outlined>
          <div class="ml-2">Detalhes do evento</div>
          <v-spacer></v-spacer>
          <v-btn
            @click="controller.dialogEvento.value = false"
            icon="mdi-close"
          >
          </v-btn>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <v-row class="mt-1">
          <v-col cols="12" lg="6">
            <v-row>
              <span>
                <v-text-field density="compact" variant="underlined" disabled=""
                  >Esporte: Football</v-text-field
                >
              </span>
            </v-row>
            <v-row>
              <span>
                <v-text-field density="compact" variant="underlined" disabled=""
                  >Gênero: Woman</v-text-field
                >
              </span>
            </v-row>
            <v-row>
              <span>
                <v-text-field density="compact" variant="underlined" disabled=""
                  >Detalhes: Women's Group B</v-text-field
                >
              </span>
            </v-row>
            <v-row>
              <span>
                <v-text-field density="compact" variant="underlined" disabled=""
                  >Data de início: 27/07/2024</v-text-field
                >
              </span>
            </v-row>
            <v-row>
              <span>
                <v-text-field density="compact" variant="underlined" disabled=""
                  >Status: Finished</v-text-field
                >
              </span>
            </v-row>
          </v-col>
          <v-col>
            <v-img
              class="mt-1"
              height="110"
              src="https://olympics.com/_pr/topic-assets/paris-2024/emblem-oly.svg"
            ></v-img>

            <v-row class="d-flex justify-center align-center py-10">
              <div>
                <v-btn
                  variant="outlined"
                  @click="controller.dialogAdversarios.value = true"
                >
                  Ver adversários
                </v-btn>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});

dayjs.extend(utc);
dayjs.extend(timezone);

const targetTimezone = "America/Sao_Paulo";
const formattedTime = (item) => {
  return dayjs(item).tz(targetTimezone).format("HH:mm");
};
</script>

<style scoped>
.card-titulo {
  background: linear-gradient(90deg, rgb(0, 56, 83) 0%, rgb(23, 183, 176) 100%);
  /* background: linear-gradient(90deg, rgb(0, 44, 73) 0%, rgb(2, 121, 218) 100%); */
  transition: transform 0.3s ease-in-out;
}

.background {
  background-color: rgb(var(--v-theme-primary)) !important;
  height: 715px;
  overflow-y: auto;
  overflow-x: hidden;
}

.background-color {
  background-color: rgb(var(--v-theme-primary)) !important;
}

.card-color {
  background-color: #1f232d;
}
</style>
