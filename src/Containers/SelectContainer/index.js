import React, { useState } from 'react'
import { connect } from 'react-redux';
import CountryDrowdown from '../../Components/CountryDropdown/index';
import { setContinent, setCountry } from '../../Store/actions/actions';

const SelectContainer = (props) => {
    const { continents, setCountry } = props
    const [cont, setcontinent] = useState(props.continent)

    const ContinentHandler = (e, data) => {
        setcontinent(e.target.value)
        props.setContinent(e.target.value)


    }
    const setCountryHandler = (e, data) => {

        setCountry(e.target.value)
    };

    const selectedContinent = continents.filter(continent => continent.code === cont)
    return (
        <div>
            <select name="Continents" value={cont || props.continent} onChange={ContinentHandler}>
                {continents.map(continent => {
                    return < option value={continent.code}> {continent.name}</option>
                })
                }
            </select>
            <select name="Country" value={props.selected} onChange={setCountryHandler}>
                {selectedContinent[0].countries.map(country =>
                    <CountryDrowdown key={country.code} country={country} />
                )}

            </select>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        selected: state.selected,
        continent: state.continent,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        setContinent: (data) => dispatch(setContinent(data)),
        setCountry: (data) => dispatch(setCountry(data))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer)