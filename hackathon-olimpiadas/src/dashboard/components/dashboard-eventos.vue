<template>
  <v-row class="background-color d-flex justify-center align-center">
    <v-col cols="3">
      <v-autocomplete
        label="País"
        density="compact"
        hide-details
        bg-color="#23272"
        color="white"
      ></v-autocomplete>
    </v-col>
    <v-col cols="3" class="d-flex justify-center align-center">
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

  <v-row class="py-10 mt-0 background">
    <v-col
      cols="12"
      lg="6"
      sm="12"
      class="d-flex justify-center align-center"
      v-for="(item, index) in controller.eventos.value"
      :key="index"
    >
      <v-card variant="outlined" height="170" width="450" class="rounded-lg">
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
  height: 720px;
  overflow-y: auto;
  overflow-x: hidden;
}

.background-color {
  background-color: rgb(var(--v-theme-primary)) !important;
}
</style>
