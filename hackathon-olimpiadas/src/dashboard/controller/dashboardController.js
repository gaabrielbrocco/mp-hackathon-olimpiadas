import { onMounted, ref } from "vue";

const dashboardController =
  (buscaMedalhasUseCase, buscaEsportesUseCase) => () => {
    const medalhas = ref([]);
    const esportes = ref([]);

    onMounted(async () => {
      await buscaEsportes();
    });

    const buscaMedalhas = async () => {
      medalhas.value = await buscaMedalhasUseCase();
    };

    const buscaEsportes = async () => {
      esportes.value = await buscaEsportesUseCase();
      console.log(esportes.value);
    };

    return {
      medalhas,
      esportes,
    };
  };

export default dashboardController;
