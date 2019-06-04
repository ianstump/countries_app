import {
  GEO_URL,
  GEO_API,
  ADD_SELECTED,
  ADD_CONTINENT,
  ADD_DARKMODE
} from "../../constants";
import axios from "axios";

const addSelected = (data, coord) => {
  return {
    type: ADD_SELECTED,
    country: data,
    coord: coord
  };
};

export const setCountry = data => async dispatch => {
  const response = await axios.get(
    `${GEO_URL}json?q=${data.toLowerCase()}&key=${GEO_API}`
  );

  const answer = await response.data;

  dispatch(addSelected(data, answer.results[0].geometry));
};

const addContinent = data => {
  return {
    type: ADD_CONTINENT,
    continent: data
  };
};

export const setContinent = data => async dispatch => {
  dispatch(addContinent(data));
};

export const setDarkMode = () => dispatch => {
  dispatch(darkModeAction());
};

const darkModeAction = () => {
  return {
    type: ADD_DARKMODE
  };
};
