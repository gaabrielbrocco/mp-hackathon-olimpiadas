<template>
  <v-container class="pa-0">
    <v-main height="calc(100vh - 270px)">
      <div class="container">
        <v-card class="d-flex flex-column rounded-xl mt-8">
          <v-card-text class="pa-0 background">
            <v-row>
              <v-col cols="12" md="3" class="d-flex flex-column align-center">
                <v-row class="d-flex justify-center align-center my-3">
                  <div class="justify-center align-center text-white">
                    <div class="text-h2 px-10 font-weight-thin mb-4 cor-letra">
                      Olympic Games
                      <div>
                        <span style="color: blue">20</span
                        ><span style="color: white">2</span>
                        <span style="color: red">4</span>
                      </div>
                    </div>
                  </div>
                </v-row>

                <v-row>
                  <v-col cols="12" lg="12" md="12" sm="12">
                    <v-row class="px-4">
                      <v-icon size="large">mdi-map-marker</v-icon>
                      <span
                        class="text-disabled px-2 mr-5"
                        style="font-size: 15px"
                        >Paris, France</span
                      >
                      <v-icon size="large" class="ml-5"
                        >mdi-calendar-month</v-icon
                      >
                      <span class="text-disabled px-2" style="font-size: 15px"
                        >26/07 - 11/08</span
                      >
                    </v-row>
                  </v-col>
                </v-row>

                <v-row class="mb-4">
                  <v-col class="text-justify" cols="12">
                    <v-row
                      class="d-flex justify-center text-h6 font-weight-thin align-center mt-2 px-10"
                      >Olympics in Paris:</v-row
                    >
                    <v-row
                      class="d-flex justify-center align-center font-weight-thin text-h6 py-2"
                    >
                      1900 | 1924 | 2024
                    </v-row>
                  </v-col>
                </v-row>

                <v-row class="ma-2">
                  <v-col cols="6" md="12">
                    <v-btn
                      :color="
                        controller.botaoAtivo.value === 'medalhas'
                          ? '#1F232D'
                          : '#0D111B'
                      "
                      height="100"
                      width="100%"
                      rounded="lg"
                      elevation="2"
                      @click="controller.buscaMedalhas"
                      class="mb-1"
                    >
                      <div
                        class="d-flex flex-column justify-center align-center"
                      >
                        <div class="mb-2">Medals</div>
                        <v-icon size="40">mdi-medal-outline</v-icon>
                      </div>
                    </v-btn>
                  </v-col>

                  <v-col
                    cols="6"
                    md="12"
                    class="d-flex justify-center align-center"
                  >
                    <v-btn
                      :color="
                        controller.botaoAtivo.value === 'esportes'
                          ? '#1F232D'
                          : '#0D111B'
                      "
                      width="100%"
                      height="100"
                      rounded="lg"
                      elevation="2"
                      @click="controller.buscaEsportes"
                      class="mb-1"
                    >
                      <div
                        class="d-flex flex-column justify-center align-center"
                      >
                        <div class="mb-2">Sports</div>
                        <v-icon size="40">mdi-swim</v-icon>
                      </div>
                    </v-btn>
                  </v-col>

                  <v-col cols="12" class="d-flex justify-center align-center">
                    <v-btn
                      :color="
                        controller.botaoAtivo.value === 'eventos'
                          ? '#1F232D'
                          : '#0D111B'
                      "
                      width="100%"
                      height="100"
                      rounded="lg"
                      elevation="2"
                      block
                      @click="controller.buscaEventos"
                      class="mb-1"
                    >
                      <div
                        class="d-flex flex-column justify-center align-center"
                      >
                        <div class="mb-2">Events</div>
                        <v-icon size="40">mdi-calendar-today</v-icon>
                      </div>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" md="9">
                <div
                  class="d-flex flex-column fill-height menu rounded-xl ma-2"
                >
                  <v-card class="ma-4" elevation="0">
                    <dashboard-esportes
                      v-if="controller.telaEsporte.value"
                      :controller="controller"
                    />
                    <dashboard-medalhas
                      v-else-if="controller.telaMedalha.value"
                      :controller="controller"
                    />
                    <dashboard-eventos v-else :controller="controller" />
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </v-main>
  </v-container>
</template>

<script setup>
import DashboardEsportes from "./dashboard-esportes.vue";
import DashboardEventos from "./dashboard-eventos.vue";
import DashboardMedalhas from "./dashboard-medalhas.vue";

const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style>
.background {
  background-color: #030712;
}

.menu {
  background-color: #030712;
}

.card-selecao {
  background-color: #99aab5;
}

.item {
  background-color: #b0b0b0;
}
</style>
