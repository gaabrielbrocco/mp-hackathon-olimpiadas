import { onMounted, ref } from "vue";

const dashboardController = (buscaMedalhasUseCase) => () => {
  const medalhas = ref([]);

  onMounted(async () => {
    await buscaMedalhas();
  });

  const buscaMedalhas = async () => {
    medalhas.value = await buscaMedalhasUseCase();
  };

  return {
    medalhas,
  };
};

export default dashboardController;
