const buscaMedalhasUseCase =
  (repository, buscaQtdMedalhasRepository) => async (page) => {
    try {
      const itens = await repository(page);
      const count = await buscaQtdMedalhasRepository(itens);

      return { itens, count };
    } catch (error) {
      throw error;
    }
  };

export default buscaMedalhasUseCase;
