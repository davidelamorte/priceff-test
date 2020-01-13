import * as actionType from './populations.const';

export const generatePopulation = (populationName) => ({
  type: actionType.GENERATE_POPULATION,
  payload: populationName
});

export const getPopulation = (populationId) => ({
  type: actionType.GET_POPULATION,
  payload: populationId
});

export const storePopulationId = (populationId) => ({
  type: actionType.STORE_POPULATION_ID,
  payload: populationId
});

export const setCurrentPopulation  = (population) => ({
  type: actionType.SET_CURRENT_POPULATION,
  payload: population
});