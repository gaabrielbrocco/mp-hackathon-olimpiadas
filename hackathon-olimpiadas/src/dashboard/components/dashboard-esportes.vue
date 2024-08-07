<template>
  <v-row class="py-1 background">
    <v-col
      v-for="(item, index) in controller.esportes.value"
      :key="index"
      cols="12"
      sm="6"
      md="4"
      lg="4"
    >
      <v-card
        class="mx-auto py-2 rounded-lg card-esportes"
        :class="['card-responsive']"
        height="120"
        width="350"
        :href="controller.linksExternos[index]"
        target="_blank"
        variant="outlined"
      >
        <v-row>
          <v-col cols="8">
            <v-card-title>
              {{ item.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.id }}
              <v-img
                class="mt-1"
                height="35"
                width="27"
                src="https://olympics.com/_pr/topic-assets/paris-2024/emblem-oly.svg"
              ></v-img>
            </v-card-subtitle>
          </v-col>
          <v-col cols="4">
            <v-card-subtitle class="mt-3">
              <v-img height="70" :src="item.pictogram_url_dark"> </v-img>
            </v-card-subtitle>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card-esportes {
  background: rgb(var(--v-theme-primary)) !important;

  /* background: linear-gradient(90deg, rgb(0, 44, 73) 0%, rgb(2, 121, 218) 100%); */
  transition: transform 0.3s ease-in-out;
}

.card-esportes:hover {
  transform: scale(1.05);
}

.background {
  background-color: rgb(var(--v-theme-primary)) !important;
  height: 779px;
  overflow-y: auto;
  overflow-x: hidden;
}

.card-responsive {
  max-width: 100%;
  height: auto;
}

/* Media Queries for Responsiveness */
@media (max-width: 600px) {
  .card-esportes {
    height: auto;
  }
}
</style>
