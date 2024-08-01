import Medalha from "@/dashboard/domain/model/medalha";

const buscaMedalhasRepository = (axios) => async (page) => {
  try {
    const response = await axios.get("/countries", {
      params: { page: page },
    });
    return response?.data?.data?.map((item) => new Medalha(item)) ?? [];
  } catch (error) {
    throw error;
  }
};

export default buscaMedalhasRepository;
