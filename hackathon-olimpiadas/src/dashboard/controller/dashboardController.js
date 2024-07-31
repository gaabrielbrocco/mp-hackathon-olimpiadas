import { onMounted, ref } from "vue";
import { colunas } from "../const/colunas";

const dashboardController =
  (buscaMedalhasUseCase, buscaEsportesUseCase, buscaEventosUseCase) => () => {
    const medalhas = ref([]);
    const esportes = ref([]);
    const eventos = ref([]);
    const telaEsporte = ref(false);
    const telaEvento = ref(false);
    const telaMedalha = ref(false);
    const itensPorPagina = ref(25);
    const colunasTabela = ref(colunas);
    const linhasTabela = ref([]);
    const totalItens = ref(0);

    onMounted(async () => {
      await buscaMedalhas();
    });

    const buscaEventos = async () => {
      telaEsporte.value = false;
      telaMedalha.value = false;
      telaEvento.value = true;
      eventos.value = await buscaEventosUseCase();
    };

    const buscaMedalhas = async () => {
      telaEsporte.value = false;
      telaEvento.value = false;
      telaMedalha.value = true;
      medalhas.value = await buscaMedalhasUseCase();
      console.log(medalhas.value);
    };

    const buscaEsportes = async () => {
      telaEvento.value = false;
      telaMedalha.value = false;
      telaEsporte.value = true;
      esportes.value = await buscaEsportesUseCase();
    };

    return {
      medalhas,
      esportes,
      eventos,
      telaEsporte,
      telaEvento,
      telaMedalha,
      itensPorPagina,
      colunasTabela,
      linhasTabela,
      totalItens,
      buscaEventos,
      buscaMedalhas,
      buscaEsportes,
    };
  };

export default dashboardController;
