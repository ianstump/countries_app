import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import Coordinates from ".././country_coord"



const initialState = {
    selected: "CH",
    coord: {
        "lat": "47.0000",
        "lng": "8.0000"
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SELECTED":
            return {
                ...state,
                selected: action.country,
                coord: action.coord

            }

        default:
            return state
    }
}


const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);
export default store

