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
    const colunasTabela = ref(colunas);
    const linhasTabela = ref([]);
    const totalItens = ref(0);
    const paginacaoTabela = ref({});
    const carregando = ref(false);

    onMounted(async () => {
      await buscaMedalhas();
    });

    const buscaEventos = async () => {
      try {
        telaEsporte.value = false;
        telaMedalha.value = false;
        telaEvento.value = true;

        eventos.value = await buscaEventosUseCase();
      } catch {}
    };

    const buscaMedalhas = async () => {
      carregando.value = true;
      telaEsporte.value = false;
      telaEvento.value = false;
      telaMedalha.value = true;
      const { itens, paginacao } = await buscaMedalhasUseCase();
      medalhas.value = itens;
      paginacaoTabela.value = paginacao;

      carregando.value = false;
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
      carregando,
      telaMedalha,
      paginacaoTabela,
      colunasTabela,
      linhasTabela,
      totalItens,
      buscaEventos,
      buscaMedalhas,
      buscaEsportes,
    };
  };

export default dashboardController;
