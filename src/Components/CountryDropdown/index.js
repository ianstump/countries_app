import React from 'react';

const CountryDrowdown = (props) => {
    const { country } = props
    return (
        <option key={country.code} value={country.code}>
            {country.name}
        </option>
    );

}

export default CountryDrowdown

//  onChange={setCountryHandler(props.setSelectedCountry, country.code)}>