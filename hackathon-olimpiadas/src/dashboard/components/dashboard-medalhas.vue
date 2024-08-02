<template>
  <v-data-table-server
    fixed-header
    height="calc(100vh - 270px)"
    v-model:items-per-page="controller.itemsPerPage.value"
    @update:options="controller.buscaMedalhas"
    :mobile="controller.isMobile.value"
    :items="controller.medalhas.value"
    :loading="controller.carregando.value"
    :header-props="{ class: 'bg-primary' }"
    :headers="controller.colunasTabela.value"
    :items-length="controller.totalItens.value"
  >
    <template v-slot:[`item.name`]="{ item }">
      <div class="d-inline-flex">
        <v-img
          :src="item.flag_url"
          cover
          width="30"
          aspect-ratio="16/9"
          class="mr-3"
        ></v-img>
        {{ item.name }}
      </div>
    </template>

    <template v-slot:[`item.gold_medals`]="{ item }">
      <div class="d-inline-flex">
        <v-img
          :src="GoldMedal"
          width="20"
          aspect-ratio="16/9"
          class="mr-3"
        ></v-img>
        {{ item.gold_medals }}
      </div>
    </template>

    <template v-slot:[`item.silver_medals`]="{ item }">
      <div class="d-inline-flex">
        <v-img
          :src="SilverMedal"
          width="20"
          aspect-ratio="16/9"
          class="mr-3"
        ></v-img>
        {{ item.silver_medals }}
      </div>
    </template>

    <template v-slot:[`item.bronze_medals`]="{ item }">
      <div class="d-inline-flex">
        <v-img
          :src="BronzeMedal"
          width="20"
          aspect-ratio="16/9"
          class="mr-3"
        ></v-img>
        {{ item.bronze_medals }}
      </div>
    </template>

    <template v-slot:[`item.total_medals`]="{ item }">
      <div class="d-inline-flex">
        <v-img
          :src="MedalAll"
          width="20"
          aspect-ratio="16/9"
          class="mr-3"
        ></v-img>
        {{ item.total_medals }}
      </div>
    </template>
  </v-data-table-server>
</template>

<script setup>
import GoldMedal from "../../assets/medalGold.svg";
import SilverMedal from "../../assets/medalSilver.svg";
import BronzeMedal from "../../assets/medalBronze.svg";
import MedalAll from "../../assets/medalAll.svg";

const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.v-table {
  background-color: rgb(var(--v-theme-primary)) !important;
}

:deep(.v-data-table-footer__items-per-page) {
  display: none;
}
</style>
