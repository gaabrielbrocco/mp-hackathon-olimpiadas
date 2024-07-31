import Evento from "../../domain/model/evento";

const buscaEventosRepository = (axios) => async () => {
  try {
    const response = await axios.get("/events");
    return response?.data?.data?.map((item) => new Evento(item)) ?? [];
  } catch (error) {
    throw error;
  }
};

export default buscaEventosRepository;
