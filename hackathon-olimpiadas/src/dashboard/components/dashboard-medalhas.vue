<template>
  <v-skeleton-loader
    type="table"
    v-if="controller.carregando.value"
  ></v-skeleton-loader>
  <v-data-table-server
    v-else
    fixed-header
    height="calc(100vh - 250px)"
    :items-per-page-options="[
      { value: 30, title: '30' },
      { value: 50, title: '50' },
      { value: 100, title: '100' },
    ]"
    :header-props="{ class: 'bg-primary' }"
    :headers="controller.colunasTabela.value"
    :items="controller.medalhas.value"
    :items-length="controller.paginacaoTabela.value.total ?? 0"
    items-per-page="30"
  >
  </v-data-table-server>
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
.v-table {
  background-color: rgb(var(--v-theme-primary)) !important;
}
</style>
