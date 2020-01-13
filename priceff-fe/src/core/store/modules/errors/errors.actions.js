import * as actionType from './errors.const';

export const setError = (error) => ({
  type: actionType.SET_ERROR,
  payload: error
});