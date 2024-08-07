import Pais from "@/dashboard/domain/model/pais";

const buscaPaisRepository = (axios) => async () => {
  try {
    let paises = [];
    let paginaAtual = 1;
    let totalPagina = 1;

    while (paginaAtual <= totalPagina) {
      const response = await axios.get(`/countries?page=${paginaAtual}`);
      const retornoPaises =
        response?.data?.data?.map((item) => new Pais(item)) ?? [];
      paises = [...paises, ...retornoPaises];

      totalPagina = response?.data?.meta?.last_page ?? 1;
      paginaAtual++;
    }
    return { itens: paises, count: paises.length };
  } catch (error) {
    throw error;
  }
};

export default buscaPaisRepository;
