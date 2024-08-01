import { computed, ref } from "vue";
import { colunas } from "../const/colunas";
import { useDisplay } from "vuetify/lib/framework.mjs";

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
    const itemsPerPage = ref(50);
    const display = useDisplay();
    const isMobile = computed(() => {
      return display.smAndDown.value;
    });
    const dialogEsportes = ref(false);
    const esporteSelecionado = ref({});

    const abreDialogEsportes = async (item) => {
      esporteSelecionado.value = item;
      dialogEsportes.value = true;
    };

    const buscaEventos = async () => {
      try {
        telaEsporte.value = false;
        telaMedalha.value = false;
        telaEvento.value = true;

        eventos.value = await buscaEventosUseCase();
      } catch {}
    };

    const buscaMedalhas = async (options) => {
      try {
        carregando.value = true;
        telaEsporte.value = false;
        telaEvento.value = false;
        telaMedalha.value = true;
        const { itens, count } = await buscaMedalhasUseCase(options.page);
        medalhas.value = itens;
        totalItens.value = count;

        carregando.value = false;
      } catch (error) {
        console.log(error);
      }
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
      itemsPerPage,
      colunasTabela,
      linhasTabela,
      totalItens,
      buscaEventos,
      buscaMedalhas,
      buscaEsportes,
      isMobile,
      dialogEsportes,
      abreDialogEsportes,
      esporteSelecionado,
    };
  };

export default dashboardController;
