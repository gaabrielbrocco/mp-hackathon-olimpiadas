import Esporte from "@/dashboard/domain/model/esporte";

const buscaEsportesRepository = (axios) => async () => {
  try {
    const response = await axios.get("/disciplines");
    return response?.data?.data?.map((item) => new Esporte(item)) ?? [];
  } catch (error) {
    throw error;
  }
};

export default buscaEsportesRepository;
