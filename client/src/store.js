import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import sources from "./reducers/sourceReducer";


export default createStore(
    combineReducers({
        sources
        
    }),
    {},
    applyMiddleware( thunk, promise())
);