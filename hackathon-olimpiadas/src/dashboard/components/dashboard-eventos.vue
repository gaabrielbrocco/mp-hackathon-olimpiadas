<template>
  <v-row class="background-color d-flex justify-center align-center">
    <v-col cols="12" lg="3" sm="12">
      <v-autocomplete
        theme="light"
        label="País"
        hide-details
        variant="underlined"
        color="white"
        :loading="controller.carregandoPaises.value"
        :items="controller.paisesFiltro.value"
        v-model="controller.filtroEvento.value.country"
        @update:model-value="controller.filtrar(controller.filtroEvento.value)"
      ></v-autocomplete>
    </v-col>
    <v-col cols="12" lg="3" sm="12" class="d-flex justify-center align-center">
      <v-autocomplete
        theme="light"
        label="Esporte"
        hide-details
        variant="underlined"
        color="white"
        :items="controller.esportes.value"
        item-title="name"
        item-value="id"
        v-model="controller.filtroEvento.value.discipline"
        @update:model-value="controller.filtrar(controller.filtroEvento.value)"
      ></v-autocomplete>
    </v-col>
    <v-col cols="12" lg="3" sm="12" class="d-flex justify-center align-center">
      <v-autocomplete
        theme="light"
        label="Gênero"
        hide-details
        variant="underlined"
        color="white"
        v-model="controller.filtroEvento.value.gender"
        :items="controller.generosFiltro.value"
        @update:model-value="controller.filtrar(controller.filtroEvento.value)"
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
      <v-card variant="text" height="240" width="450" class="rounded-lg">
        <v-toolbar density="compact" color="#1F232D" flat>
          <v-row class="mx-2">
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
        </v-toolbar>

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
              item.competitors.length && item.competitors.length > 1
                ? item.competitors[1].country_id
                : null
            }}
            <v-img
              class="ml-2"
              max-width="35"
              cover
              :src="
                item.competitors.length && item.competitors.length > 1
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
            @click="controller.abreDialogEvento(item)"
          ></v-btn>
        </v-card-actions>
      </v-card>

      <v-dialog
        v-model="controller.dialogEvento.value"
        width="500"
        opacity="0"
        scrollable
        class="ma-2"
        persistent
      >
        <v-card class="card-color rounded-xl">
          <v-card-title class="pa-0">
            <v-toolbar flat color="white" outlined>
              <div class="ml-4">Detalhes do evento</div>
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
                    <v-text-field
                      density="compact"
                      variant="underlined"
                      disabled
                      >Esporte:
                      {{
                        controller.modelEventos.value.discipline_name
                      }}</v-text-field
                    >
                  </span>
                </v-row>
                <v-row>
                  <span>
                    <v-text-field
                      density="compact"
                      variant="underlined"
                      disabled=""
                      >Gênero:
                      {{
                        controller.modelEventos.value.event_name
                      }}</v-text-field
                    >
                  </span>
                </v-row>
                <v-row>
                  <span>
                    <v-text-field
                      density="compact"
                      variant="underlined"
                      disabled=""
                      >Detalhes:
                      {{
                        controller.modelEventos.value.detailed_event_name
                      }}</v-text-field
                    >
                  </span>
                </v-row>
                <v-row>
                  <span>
                    <v-text-field
                      density="compact"
                      variant="underlined"
                      disabled=""
                      >Data de início:
                      {{
                        dayjs(controller.modelEventos.value.day).format(
                          "DD/MM/YYYY"
                        )
                      }}
                    </v-text-field>
                  </span>
                </v-row>
                <v-row>
                  <span>
                    <v-text-field
                      density="compact"
                      variant="underlined"
                      disabled=""
                      >Status:
                      {{ controller.modelEventos.value.status }}</v-text-field
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
                      @click="controller.dialogCompetidores.value = true"
                    >
                      Competidores
                    </v-btn>
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-col>

    <v-row class="d-flex justify-center align-center mt-5">
      <v-pagination
        v-model="controller.page.value"
        rounded="circle"
        density="compact"
        :length="controller.totalEventos.value"
        @update:model-value="controller.buscaEventos(controller.page.value)"
        :total-visible="10"
      ></v-pagination>
    </v-row>
  </v-row>
  <v-dialog
    v-model="controller.dialogCompetidores.value"
    width="800"
    opacity="0.2"
    scrollable
    class="ma-2"
    persistent
  >
    <v-card class="card-color rounded-xl">
      <v-card-title class="pa-0">
        <v-toolbar flat color="white" outlined>
          <div class="ml-4">Competidores</div>
          <v-spacer></v-spacer>
          <v-btn
            @click="controller.dialogCompetidores.value = false"
            icon="mdi-close"
          >
          </v-btn>
        </v-toolbar>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row
            v-for="(item, index) in controller.modelEventos.value.competitors"
            :key="index"
            class="mb-3"
          >
            <v-col cols="12">
              <v-card outlined class="rounded-lg background-color">
                <v-row class="pa-3" align="center">
                  <v-col cols="12" md="4" class="text-center">
                    <v-img
                      :src="item.country_flag_url"
                      height="40"
                      class="my-2"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="4" class="text-center">
                    <v-card-title class="pa-0">{{
                      item.competitor_name
                    }}</v-card-title>
                    <v-card-subtitle class="pa-0"
                      >{{ item.country_id }}
                    </v-card-subtitle>
                  </v-col>
                  <v-col cols="12" md="4" class="text-center">
                    <v-icon
                      v-if="item.result_winnerLoserTie === 'W'"
                      icon="mdi-crown"
                      color="warning"
                      size="x-large"
                    ></v-icon>
                    <v-icon
                      v-else-if="item.result_position === '1'"
                      icon="mdi-medal"
                      color="#D3A01F"
                      size="x-large"
                    ></v-icon>
                    <v-icon
                      v-else-if="item.result_position === '2'"
                      icon="mdi-medal"
                      color="#C0C0C0"
                      size="x-large"
                    ></v-icon>
                    <v-icon
                      v-else-if="item.result_position === '3'"
                      icon="mdi-medal"
                      color="#CD7F32"
                      size="x-large"
                    ></v-icon>
                    <v-card-text
                      class="pa-2"
                      v-if="item.result_winnerLoserTie || item.result_mark"
                    >
                      <div
                        :style="
                          item.result_position === '1' ||
                          item.result_position === '2' ||
                          item.result_position === '3'
                            ? 'color: white'
                            : 'color: gray'
                        "
                      >
                        Pontuação: {{ item.result_mark }}
                      </div>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
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
  /* background-color: #1f232d; */
  background-color: rgb(var(--v-theme-primary)) !important;
}
</style>
