const buscaPaisesUseCase = (repository) => async () => {
  try {
    return await repository();
  } catch (error) {
    throw error;
  }
};

export default buscaPaisesUseCase;
