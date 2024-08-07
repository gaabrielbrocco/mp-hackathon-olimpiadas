const buscaEventosUseCase = (repository) => async (filtro, params) => {
  try {
    return await repository(filtro, params);
  } catch (error) {
    throw error;
  }
};

export default buscaEventosUseCase;
