import React from 'react';
import { connect } from "react-redux"
import { useQuery } from "graphql-hooks";
import { GET_DETAILS } from '../../queries';
import "./index.scss"

function CountryDetails(props) {
    const { selected } = props

    const { loading, error, data } = useQuery(GET_DETAILS(selected))
    if (loading) return 'Loading...'
    if (error) return 'Something Bad Happened'
    console.log(data.country)
    const { country } = data
    return (
        country && <div className="data-container">
            <h1 className="title">{data.country.emoji} {data.country.name} ({data.country.native})</h1>
            <p>Currencies: {data.country.currency}</p>
            <h3>Languages:</h3>
            <ul>{data.country.languages.map(language => {
                return <li>{language.name}</li>
            })}</ul>



        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selected: state.selected
    }
}

export default connect(mapStateToProps)(CountryDetails)