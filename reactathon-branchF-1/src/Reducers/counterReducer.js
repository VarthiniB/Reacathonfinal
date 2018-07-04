import * as actionType from '../actions/ActionType';

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionType.ADD_COUNTER:
    console.log("==============actionType.ADD_COUNTER==================="+action.id+"====="+state);
      return newState = action.id;
    case actionType.REMOVE_COUNTER:
    console.log("=============actionType.REMOVE_COUNTER==================="+actionType.REMOVE_COUNTER);
      return newState = action.id;
    default:
      return state
  }
}

export default counterReducer;
