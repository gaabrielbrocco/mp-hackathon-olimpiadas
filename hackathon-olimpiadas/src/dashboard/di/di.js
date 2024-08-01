import axiosInstance from "./axios";

import buscaMedalhasRepository from "../data/repository/buscaMedalhasRepository";
import buscaEsportesRepository from "../data/repository/buscaEsportesRepository";
import buscaEventosRepository from "../data/repository/buscaEventosRepository";
import buscaQtdMedalhasRepository from "../data/repository/buscaQtdMedalhasRepository";

import buscaMedalhasUseCase from "../domain/usecase/buscaMedalhasUseCase";
import buscaEsportesUseCase from "../domain/usecase/buscaEsportesUseCase";
import buscaEventosUseCase from "../domain/usecase/buscaEventoUseCase";

import dashboardController from "../controller/dashboardController";

const instance = axiosInstance;

const buscaMedalhasRepositoryImpl = buscaMedalhasRepository(instance);
const buscaEsportesRepositoryImpl = buscaEsportesRepository(instance);
const buscaEventosRepositoryImpl = buscaEventosRepository(instance);
const buscaQtdMedalhasRepositoryImpl = buscaQtdMedalhasRepository(instance);

const buscaMedalhasUseCaseImpl = buscaMedalhasUseCase(
  buscaMedalhasRepositoryImpl,
  buscaQtdMedalhasRepositoryImpl
);
const buscaEsportesUseCaseImpl = buscaEsportesUseCase(
  buscaEsportesRepositoryImpl
);
const buscaEventosUseCaseImpl = buscaEventosUseCase(buscaEventosRepositoryImpl);

const dashboardControllerImpl = dashboardController(
  buscaMedalhasUseCaseImpl,
  buscaEsportesUseCaseImpl,
  buscaEventosUseCaseImpl
);

export { dashboardControllerImpl };
