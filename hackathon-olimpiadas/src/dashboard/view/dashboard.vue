<template>
  <dashboard-geral :controller="controller" />
</template>

<script setup>
import { dashboardControllerImpl } from "../di/di";
import DashboardGeral from "../components/dashboard-geral.vue";

const controller = dashboardControllerImpl();
</script>

<style></style>
