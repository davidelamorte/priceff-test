import {put, takeLatest} from 'redux-saga/effects';
import {AWS_API} from 'helpers/rest-client/api.const';
import ApiPopulation from 'core/api/populations';

import * as errorsActions from 'core/store/modules/errors/errors.actions';
import * as populationActions from 'core/store/modules/populations/populations.actions';
import * as actionType from './populations.const';

const ApiPopulationClient = new ApiPopulation(AWS_API);

function* generatePopulation(action) {
  console.log('SAGA', action.payload)

  try {
    const generatedPopulation = yield ApiPopulationClient.generatePopulation(action.payload);
    // Store ID
    yield put(populationActions.storePopulationId({id: generatedPopulation.id, name: generatedPopulation.name}))
    // Store Pop
    yield put(populationActions.setCurrentPopulation(generatedPopulation))
    return true;
  } catch (error) {
    yield put(errorsActions.setError(error));
  }
};

function* getPopulation(action) {

  try {
    const population = yield ApiPopulationClient.getPopulation(action.payload);
    yield put(populationActions.setCurrentPopulation(population))
    return true;
  } catch (error) {
    yield put(errorsActions.setError(error));
  }
};

export const populationSaga = function* () {
  yield takeLatest(actionType.GENERATE_POPULATION, generatePopulation);
  yield takeLatest(actionType.GET_POPULATION, getPopulation);
};