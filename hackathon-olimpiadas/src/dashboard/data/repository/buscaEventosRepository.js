import Evento from "../../domain/model/evento";

const buscaEventosRepository = (axios) => async (pagina) => {
  try {
    const response = await axios.get("/events", {
      params: { page: pagina },
    });
    return {
      itens: response?.data?.data.map((item) => new Evento(item)) ?? [],
      paginacao: response?.data?.meta ?? {},
    };
  } catch (error) {
    throw error;
  }
};

export default buscaEventosRepository;
