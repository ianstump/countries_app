import React from "react";
import { useQuery } from "graphql-hooks";

import { GET_CONTINENTS } from "../../queries";
import SelectContainer from "../SelectContainer";

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  return <SelectContainer continents={data.continents} />;
};

export default CountryList;
