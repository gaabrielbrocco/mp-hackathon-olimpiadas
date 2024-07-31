import Medalha from "@/dashboard/domain/model/medalha";

const buscaMedalhasRepository = (axios) => async () => {
  try {
    const response = await axios.get("/countries");
    return {
      itens: response?.data?.data?.map((item) => new Medalha(item)) ?? [],
      paginacao: response?.data?.meta ?? {},
    };
  } catch (error) {
    throw error;
  }
};

export default buscaMedalhasRepository;
