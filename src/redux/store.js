import {createStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import starWars from "./slices/starWarsSlices";


const reducer = combineReducers({
    starWars: starWars,
});

const store = createStore(reducer);
export default store;