import { all, call } from 'redux-saga/effects';

import {populationSaga} from 'core/store/modules/populations/populations.saga';

export const rootSaga = function*() {
  yield all([
    call(populationSaga)
  ]);
};







