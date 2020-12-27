import {createStore} from "redux";
import {addInfoReducer} from "./reducers";

export const statesStore = createStore(addInfoReducer);
console.log(statesStore.getState());