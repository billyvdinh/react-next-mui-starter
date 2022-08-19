import { combineReducers } from "@reduxjs/toolkit";
import { helloReducer } from "./hello";

export const rootReducer = combineReducers({
  hello: helloReducer,
});
