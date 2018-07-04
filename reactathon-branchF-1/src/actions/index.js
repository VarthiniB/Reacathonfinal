import * as actionType from './ActionType';

export const addCounter = (value) => ({
  type: actionType.ADD_COUNTER,
  payload: value
});

export const removeCounter = () => ({
  type: actionType.REMOVE_COUNTER,
  payload: 1
});
