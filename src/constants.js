import { GraphQLClient } from "graphql-hooks";

export const GEO_API = "e7e1123ce5e948e080dc2cf5ad148f85";
export const GEO_URL = `https://api.opencagedata.com/geocode/v1/`;
export const darkMapKey = "dd286b8021c44dcda3ffec3ab2bdda77";

// constants for action types
export const ADD_CONTINENT = "ADD_CONTINENT";
export const ADD_SELECTED = "ADD_SELECTED";
export const ADD_DARKMODE = "ADD_DARKMODE";

// GraphQL Client
export const client = new GraphQLClient({
  url: "https://countries.trevorblades.com"
});

//Map constants

export const lightMap = `https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=${darkMapKey}`;
export const darkMap = `https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=${darkMapKey}`;
export const iconColors = {
  grey:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png",
  blue:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png"
};
