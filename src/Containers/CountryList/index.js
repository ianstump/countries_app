import React from "react"
import {useQuery} from 'graphql-hooks'
import CountryDrowdown from "../../Components/CountryDropdown";
import {connect} from "react-redux"

const GET_COUNTRIES = `
    {
        countries {
            name
            code
        }
    
    }
    
`;

const CountryList = (props) => {
    const {dispatch,selected}= props
    const {loading, error, data} = useQuery(GET_COUNTRIES)

    const setCountryHandler = (e) => {
        dispatch({ type: 'ADD_SELECTED',payload:e.target.value })};
    if (loading) return 'Loading...'
    if (error) return 'Something Bad Happened'

    return (
        <select name="Country" value={selected} onChange={setCountryHandler}>
            {data.countries.map(country =>
                <CountryDrowdown key={country.code} country={country} />)
                }
        </select>
    );
}

const mapStateToProps = (state) => {
    return {
        selected: state.selected
    }
}

export default connect(mapStateToProps)(CountryList)
