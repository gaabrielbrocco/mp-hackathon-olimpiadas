import axiosInstance from "./axios";

import buscaMedalhasRepository from "../data/repository/buscaMedalhasRepository";
import buscaEsportesRepository from "../data/repository/buscaEsportesRepository";

import buscaMedalhasUseCase from "../domain/usecase/buscaMedalhasUseCase";
import buscaEsportesUseCase from "../domain/usecase/buscaEsportesUseCase";

import dashboardController from "../controller/dashboardController";

const instance = axiosInstance;

const buscaMedalhasRepositoryImpl = buscaMedalhasRepository(instance);
const buscaEsportesRepositoryImpl = buscaEsportesRepository(instance);

const buscaMedalhasUseCaseImpl = buscaMedalhasUseCase(
  buscaMedalhasRepositoryImpl
);
const buscaEsportesUseCaseImpl = buscaEsportesUseCase(
  buscaEsportesRepositoryImpl
);

const dashboardControllerImpl = dashboardController(
  buscaMedalhasUseCaseImpl,
  buscaEsportesUseCaseImpl
);

export { dashboardControllerImpl };
