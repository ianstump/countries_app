import React, { useState, useEffect } from 'react';
import './App.scss';
import { connect } from "react-redux"
import CountryList from "../CountryList"
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import CountryDetails from "../CountryDetails";
import Map from '../Map/index';
import { setDarkMode } from '../../Store/actions/actions';


const client = new GraphQLClient({
    url: "https://countries.trevorblades.com"

});




function App(props) {
    const [theme, settheme] = useState("App")
    console.log(props.dispatch);

    const darkModeHandler = () => {
        theme == "App" && settheme("App-dark") || theme == "App-dark" && settheme("App")
        props.dispatch(setDarkMode)
    }




    return (


        <ClientContext.Provider value={client}>
            <div className={theme}>
                <div className="darkmode-container">
                    <p>Dark Mode</p>
                    <input onClick={darkModeHandler}
                        type="checkbox" id="toggle" class="offscreen"
                        placeholder="darkmode" />
                    <label for="toggle" class="switch"></label></div>

                <Map />
                <CountryList />
                <CountryDetails />
            </div>
        </ClientContext.Provider>

    );
}
// const mapDispatchToProps = dispatch => {
//     return {
//         setDarkMode: () => dispatch(setDarkMode),
//     }
// }

export default connect()(App);
