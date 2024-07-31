<template>
  <v-data-table
    fixed-header
    :header-props="{ class: 'bg-primary' }"
    height="calc(100vh - 250px)"
    :headers="controller.colunasTabela.value"
    :items="controller.medalhas.value"
    :items-length="controller.totalItens.value"
    :items-per-page="controller.itensPorPagina.value"
  >
  </v-data-table>
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
