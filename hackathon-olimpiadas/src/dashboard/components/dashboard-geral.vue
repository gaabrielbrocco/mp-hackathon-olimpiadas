<template>
  <v-container>
    <v-main style="padding: 10px 80px 10px">
      <div class="container">
        <v-card
          class="d-flex my-10 rounded-xl"
          style="height: calc(87vh - 20px); min-height: 500px"
        >
          <v-card-text class="d-flex justify-center pa-0 background">
            <v-col cols="3">
              <v-row class="d-flex justify-center align-center my-3">
                <div class="justify-center align-center text-white">
                  <p class="text-h4 font-weight-thin mb-4 cor-letra">
                    Jogos Olímpicos
                    <span style="color: blue">20</span
                    ><span style="color: white">2</span>
                    <span style="color: red">4</span>
                  </p>
                </div>
              </v-row>

              <v-divider class="d-flex justify-center align-center"></v-divider>

              <v-row class="py-8">
                <v-col cols="12">
                  <v-row class="px-4">
                    <v-icon size="large">mdi-map-marker</v-icon>
                    <span class="text-disabled px-2" style="font-size: 15px"
                      >Paris, França</span
                    >
                    <v-spacer></v-spacer>
                    <v-icon size="large">mdi-calendar-month</v-icon>
                    <span class="text-disabled px-2" style="font-size: 15px"
                      >26/07 - 11/08</span
                    >
                  </v-row>
                </v-col>
              </v-row>

              <v-row class="mb-8">
                <v-col class="text-justify" cols="12">
                  <v-row class="d-flex justify-center align-center mt-1"
                    >Paris irá sediar as Olimpíadas pela terceira vez:</v-row
                  >
                  <v-row
                    class="d-flex justify-center align-center font-weight-thin text-h6 py-2"
                  >
                    1900 | 1924 | 2024</v-row
                  >
                </v-col>
              </v-row>

              <v-divider
                class="d-flex justify-center align-center py-5"
              ></v-divider>

              <v-row>
                <v-col cols="6" class="d-flex justify-center align-center">
                  <v-btn
                    color="#232729"
                    width="160"
                    height="120"
                    rounded="lg"
                    elevation="2"
                  >
                    <div class="d-flex flex-column justify-center align-center">
                      <div class="text-disabled mb-2">Medalhas</div>
                      <v-icon size="40">mdi-medal-outline</v-icon>
                    </div>
                  </v-btn>
                </v-col>

                <v-col cols="6" class="d-flex justify-center align-center">
                  <v-btn
                    color="#232729"
                    width="160"
                    height="120"
                    rounded="lg"
                    elevation="2"
                  >
                    <div class="d-flex flex-column justify-center align-center">
                      <div class="text-disabled mb-2">Esportes</div>
                      <v-icon size="40">mdi-swim</v-icon>
                    </div>
                  </v-btn>
                </v-col>

                <v-col cols="6" class="d-flex justify-center align-center">
                  <v-btn
                    color="#232729"
                    width="160"
                    height="120"
                    rounded="lg"
                    elevation="2"
                  >
                    <div class="d-flex flex-column justify-center align-center">
                      <div class="text-disabled mb-2">Eventos</div>
                      <v-icon size="40">mdi-calendar-today</v-icon>
                    </div>
                  </v-btn>
                </v-col>

                <v-col cols="6" class="d-flex justify-center align-center">
                  <v-btn
                    color="#232729"
                    width="160"
                    height="120"
                    rounded="lg"
                    elevation="2"
                  >
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="9">
              <div
                class="d-flex flex-column fill-height justify-start align-start text-white menu rounded-xl"
              ></div>
            </v-col>
          </v-card-text>
        </v-card>
      </div>
    </v-main>
  </v-container>
</template>

<script setup>
const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style>
.background {
  background-color: #1b1e20;
}

.menu {
  background-color: #232729;
}

.card-selecao {
  background-color: #99aab5;
}

.item {
  background-color: #f7b91a;
}
</style>
