import React from 'react';
import {connect} from "react-redux"
import {useQuery} from "graphql-hooks";


function CountryDetails(props) {
    const {selected} = props

    const GET_DETAILS = `
    {
      country(code: "${selected}") {
        name
        native
        emoji
        currency
        languages {
          code
          name
        }
  }
}
`;

    const {loading, error, data} = useQuery(GET_DETAILS)
    if (loading) return 'Loading...'
    if (error) return 'Something Bad Happened'
    console.log(selected)
    const {country} = data
    return (
        country && <div>
            <h1>{data.country.name}</h1>
            <p>{data.country.native}</p>
            <p>{data.country.emoji}</p>
            <p>{data.country.currency}</p>


        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selected: state.selected
    }
}

export default connect(mapStateToProps)(CountryDetails)