const buscaEventosUseCase = (repository) => async (params) => {
  try {
    return await repository(params);
  } catch (error) {
    throw error;
  }
};

export default buscaEventosUseCase;
