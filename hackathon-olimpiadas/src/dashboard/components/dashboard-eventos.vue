<template>
  <v-row>
    <v-col v-for="(item, index) in controller.eventos.value" :key="index">
      <v-card height="120" width="350">aaaaaa </v-card>
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

<style></style>
