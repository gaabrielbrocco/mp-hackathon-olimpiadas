import axiosInstance from "./axios";

import buscaMedalhasRepository from "../data/repository/buscaMedalhasRepository";
import buscaMedalhasUseCase from "../domain/usecase/buscaMedalhasUseCase";
import dashboardController from "../controller/dashboardController";

const instance = axiosInstance;

const buscaMedalhasRepositoryImpl = buscaMedalhasRepository(instance);
const buscaMedalhasUseCaseImpl = buscaMedalhasUseCase(
  buscaMedalhasRepositoryImpl
);

const dashboardControllerImpl = dashboardController(buscaMedalhasUseCaseImpl);

export { dashboardControllerImpl };
