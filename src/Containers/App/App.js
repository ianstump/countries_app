import React, { useState } from "react";
import "./App.scss";
import { connect } from "react-redux";
import CountryList from "../CountryList";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import CountryDetails from "../CountryDetails";
import Map from "../Map/index";
import { setDarkMode } from "../../Store/actions/actions";

const client = new GraphQLClient({
  url: "https://countries.trevorblades.com"
});

function App(props) {
  const [theme, settheme] = useState("App");

  const darkModeHandler = () => {
    (theme === "App" && settheme("App-dark")) ||
      (theme === "App-dark" && settheme("App"));
    props.dispatch(setDarkMode);
  };

  return (
    <ClientContext.Provider value={client}>
      <div className={theme}>
        <div className="darkmode-container">
          <p>Dark Mode</p>
          <input
            onClick={darkModeHandler}
            type="checkbox"
            id="toggle"
            className="offscreen"
            placeholder="darkmode"
          />
          <label htmlFor="toggle" className="switch" />
        </div>

        <Map />
        <CountryList />
        <CountryDetails className="country-details" />
      </div>
    </ClientContext.Provider>
  );
}

export default connect()(App);
