import { GEO_URL, GEO_API } from "../../constants";
import axios from "axios"
import { async } from "q";
import { GET_CONTINENTS } from "../../queries";


const ADD_SELECTED = (data, coord) => {
    return {
        type: 'ADD_SELECTED',
        country: data,
        coord: coord,

    }
}

export const setCountry = (data) => async (dispatch) => {
    const response = await axios.get(`${GEO_URL}json?q=${data.replace(" ", "_")}&key=${GEO_API}`)
    const answer = await response.data

    dispatch(ADD_SELECTED(data, answer.results[0].geometry))
}


export const setContinent = (data) => async (dispatch) => {
    const response = await axios.get(`${GEO_URL}json?q=${data.replace(" ", "_")}&key=${GEO_API}`)
    const answer = await response.data


}
