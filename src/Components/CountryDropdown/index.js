import React from "react";

const CountryDrowdown = ({ country }) => {
  return (
    <option key={country.code} value={country.code}>
      {country.name}
    </option>
  );
};

export default CountryDrowdown;
