import { computed, onBeforeMount, onMounted, ref } from "vue";
import { colunas } from "../const/colunas";
import { useDisplay } from "vuetify/lib/framework.mjs";
import Evento from "../domain/model/evento";
import Competitors from "../domain/model/competitors";

const dashboardController =
  (buscaMedalhasUseCase, buscaEsportesUseCase, buscaEventosUseCase) => () => {
    const medalhas = ref([]);
    const esportes = ref([]);
    const eventos = ref([]);
    const modelEventos = ref(new Evento({}));
    const modelCompetidores = ref(new Competitors({}));
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
    const botaoAtivo = ref("");
    const page = ref(1);
    const totalEventos = ref(0);
    const isMobile = computed(() => {
      return display.smAndDown.value;
    });
    const dialogEvento = ref(false);
    const dialogCompetidores = ref(false);

    onMounted(async () => {
      await buscaMedalhas();
    });

    onBeforeMount(async () => {
      await buscaEventos();
    });

    const buscaEventos = async (params) => {
      try {
        telaEsporte.value = false;
        telaMedalha.value = false;
        telaEvento.value = true;
        botaoAtivo.value = "eventos";
        const { itens, paginacao } = await buscaEventosUseCase(params);
        eventos.value = itens;
        totalEventos.value = paginacao.last_page;
      } catch (error) {
        console.log(error);
      }
    };

    const buscaMedalhas = async (options) => {
      try {
        carregando.value = true;
        telaEsporte.value = false;
        telaEvento.value = false;
        telaMedalha.value = true;
        botaoAtivo.value = "medalhas";
        const { itens, count } = await buscaMedalhasUseCase(options.page);
        medalhas.value = itens;
        totalItens.value = count;

        carregando.value = false;
      } catch (error) {}
    };

    const buscaEsportes = async () => {
      try {
        telaEvento.value = false;
        telaMedalha.value = false;
        telaEsporte.value = true;
        botaoAtivo.value = "esportes";
        esportes.value = await buscaEsportesUseCase();
      } catch (error) {}
    };

    const abreDialogEvento = async (item) => {
      modelEventos.value = { ...item };
      dialogEvento.value = true;
    };

    const verificaPosicao = async (item) => {
      console.log(item);
      if (item === "1") return "yellow";
      if (item === "2") return "#c0c0c0";
      if (item === "3") return "#cd7f32";
    };

    const linksExternos = [
      "https://olympics.com/pt/paris-2024/esportes/basquetebol-3x3",
      "https://olympics.com/pt/paris-2024/esportes/tiro-com-arco",
      "https://olympics.com/pt/paris-2024/esportes/ginastica-artistica",
      "https://olympics.com/pt/paris-2024/esportes/nado-sincronizado",
      "https://olympics.com/pt/paris-2024/esportes/atletismo",
      "https://olympics.com/pt/paris-2024/esportes/badminton",
      "https://olympics.com/pt/paris-2024/esportes/basquetebol",
      "https://olympics.com/pt/paris-2024/esportes/volei-de-praia",
      "https://olympics.com/pt/paris-2024/esportes/boxe",
      "https://olympics.com/pt/paris-2024/esportes/breaking",
      "https://olympics.com/pt/paris-2024/esportes/canoagem-slalom",
      "https://olympics.com/pt/paris-2024/esportes/canoagem-velocidade",
      "https://olympics.com/pt/paris-2024/esportes/ciclismo-bmx-freestyle",
      "https://olympics.com/pt/paris-2024/esportes/ciclismo-bmx-racing",
      "https://olympics.com/pt/paris-2024/esportes/ciclismo-mountain-bike",
      "https://olympics.com/pt/paris-2024/esportes/ciclismo-de-estrada",
      "https://olympics.com/pt/paris-2024/esportes/ciclismo-de-pista",
      "https://olympics.com/pt/paris-2024/esportes/saltos-ornamentais",
      "https://olympics.com/pt/paris-2024/esportes/equestre",
      "https://olympics.com/pt/paris-2024/esportes/esgrima",
      "https://olympics.com/pt/paris-2024/esportes/futebol",
      "https://olympics.com/pt/paris-2024/esportes/golfe",
      "https://olympics.com/pt/paris-2024/esportes/handebol",
      "https://olympics.com/pt/paris-2024/esportes/hoquei-sobre-grama",
      "https://olympics.com/pt/paris-2024/esportes/judo",
      "https://olympics.com/pt/paris-2024/esportes/maratona-de-natacao",
      "https://olympics.com/pt/paris-2024/esportes/pentatlo-moderno",
      "https://olympics.com/pt/paris-2024/esportes/ginastica-ritmica",
      "https://olympics.com/pt/paris-2024/esportes/remo",
      "https://olympics.com/pt/paris-2024/esportes/rugby-sevens",
      "https://olympics.com/pt/paris-2024/esportes/vela",
      "https://olympics.com/pt/paris-2024/esportes/tiro-esportivo",
      "https://olympics.com/pt/paris-2024/esportes/skateboarding",
      "https://olympics.com/pt/paris-2024/esportes/escalada",
      "https://olympics.com/pt/paris-2024/esportes/surfing",
      "https://olympics.com/pt/paris-2024/esportes/natacao",
      "https://olympics.com/pt/paris-2024/esportes/tenis-de-mesa",
      "https://olympics.com/pt/paris-2024/esportes/taekwondo",
      "https://olympics.com/pt/paris-2024/esportes/tenis",
      "https://olympics.com/pt/paris-2024/esportes/ginastica-de-trampolim",
      "https://olympics.com/pt/paris-2024/esportes/triatlo",
      "https://olympics.com/pt/paris-2024/esportes/volei",
      "https://olympics.com/pt/paris-2024/esportes/polo-aquatico",
      "https://olympics.com/pt/paris-2024/esportes/levantamento-de-peso",
      "https://olympics.com/pt/paris-2024/esportes/luta-livre",
    ];

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
      totalEventos,
      buscaEsportes,
      isMobile,
      linksExternos,
      botaoAtivo,
      page,
      dialogEvento,
      dialogCompetidores,
      abreDialogEvento,
      modelCompetidores,
      modelEventos,
      verificaPosicao,
    };
  };

export default dashboardController;
