import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { ADD_SELECTED, ADD_CONTINENT, ADD_DARKMODE } from "../constants";

const initialState = {
  continent: "EU",
  selected: "CH",
  coord: {
    lat: "47.0000",
    lng: "8.0000"
  },
  darkMode: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED:
      return {
        ...state,
        selected: action.country,
        coord: action.coord
      };
    case ADD_CONTINENT:
      return {
        ...state,
        continent: action.continent
      };
    case ADD_DARKMODE:
      return {
        ...state,
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);
export default store;
