import {STATE_KEY} from './errors.const';

export const lastErrorSelector = (state) => state[STATE_KEY].lastError;