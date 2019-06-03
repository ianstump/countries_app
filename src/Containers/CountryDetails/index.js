import React from "react";
import { connect } from "react-redux";
import { useQuery } from "graphql-hooks";
import { GET_DETAILS } from "../../queries";
import Skeleton from "react-loading-skeleton";

import "./index.scss";

function CountryDetails(props) {
  const { selected } = props;

  const { loading, error, data } = useQuery(GET_DETAILS(selected));
  if (loading)
    return (
      <div className="skeleton">
        <div className="skeleton-container">
          <Skeleton width={400} height={20} className="skeleton_title" />
          <Skeleton width={200} className="skeleton-element" count={10} />
        </div>
      </div>
    );

  if (error) return console.log(error);

  const { country } = data;
  return (
    country && (
      <div className="data-container">
        <h1 className="title">
          {data.country.emoji} {data.country.name} ({data.country.native})
        </h1>
        <p>Currencies: {data.country.currency}</p>
        <h3>Languages:</h3>
        <ul>
          {data.country.languages.map(language => {
            return <li>{language.name}</li>;
          })}
        </ul>
      </div>
    )
  );
}

const mapStateToProps = state => {
  return {
    selected: state.selected
  };
};

export default connect(mapStateToProps)(CountryDetails);
