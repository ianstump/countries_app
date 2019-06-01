import axios from 'axios';

const baseURL = "https://countries.trevorblades.com"

export const GQLaxios = axios.create({
        baseURL,
    });

