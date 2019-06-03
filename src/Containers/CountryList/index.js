import React from "react";
import { useQuery } from "graphql-hooks";
import { GET_CONTINENTS } from "../../queries";
import SelectContainer from "../SelectContainer";
import Skeleton from "react-loading-skeleton";

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  if (loading)
    return <Skeleton width={100} className="skeleton-element" count={10} />;
  if (error) console.log(error);

  return <SelectContainer continents={data.continents} />;
};

export default CountryList;
