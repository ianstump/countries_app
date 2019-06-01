import { GEO_URL, GEO_API } from "../../constants";
import Axios from "axios";
import axios from "axios"


const action = (data, coord) => {
    return {
        type: 'ADD_SELECTED',
        country: data,
        coord: coord,

    }
}

export const setCountry = (data) => async (dispatch) => {
    console.log(data);

    const response = await axios.get(`${GEO_URL}json?q=${data.replace(" ", "_")}&key=${GEO_API}`)
    const answer = await response.data
    dispatch(action(data, answer.results[0].geometry))
}

