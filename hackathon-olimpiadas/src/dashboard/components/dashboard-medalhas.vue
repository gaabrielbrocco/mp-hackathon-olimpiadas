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

:deep(.v-data-table-footer__items-per-page) {
  display: none;
}
</style>
