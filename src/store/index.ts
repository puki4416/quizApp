import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({});

export function* rootSaga() {
  yield all([]);
}

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
