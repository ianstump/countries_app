import React from 'react';
import './App.css';


import CountryList from "../CountryList"
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import CountryDetails from "../CountryDetails";

const client = new GraphQLClient({
    url: "https://countries.trevorblades.com"
});




function App() {

    return (

        <ClientContext.Provider value={client}>
            <div className="App">
                <CountryList />
                <CountryDetails/>
            </div>
        </ClientContext.Provider>

    );
}

export default App;
