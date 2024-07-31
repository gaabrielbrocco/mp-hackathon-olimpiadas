import Medalha from "@/dashboard/domain/model/medalha";

const buscaMedalhasRepository = (axios) => async () => {
  try {
    const response = await axios.get("/countries");
    console.log(response);
    return response?.data?.value?.map((item) => new Medalha(item)) ?? [];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default buscaMedalhasRepository;
