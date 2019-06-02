import React, { useState } from "react"
import { useQuery } from 'graphql-hooks'
import CountryDrowdown from "../../Components/CountryDropdown";
import { connect } from "react-redux"
import { setCountry } from "../../Store/actions/actions";
import { GET_CONTINENTS } from '../../queries';
import SelectContainer from "../SelectContainer";


const CountryList = (props) => {
    const { selected } = props;
    const { loading, error, data } = useQuery(GET_CONTINENTS)



    if (loading) return 'Loading...';
    if (error) return 'Something Bad Happened';

    return (

        <SelectContainer continents={data.continents} />

    );
};



const mapDispatchToProps = dispatch => {
    return {
        setCountry: (data) => dispatch(setCountry(data))
    }
}

export default connect(null, mapDispatchToProps)(CountryList)
