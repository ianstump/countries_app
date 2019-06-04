import React, { useState } from "react";
import "./App.scss";
import { connect } from "react-redux";
import CountryList from "../CountryList";
import { ClientContext } from "graphql-hooks";
import CountryDetails from "../CountryDetails";
import Map from "../Map/index";
import { setDarkMode } from "../../Store/actions/actions";
import { client } from "../../constants";

function App({ setDarkMode }) {
  const [theme, settheme] = useState("App");

  const darkModeHandler = () => {
    (theme === "App" && settheme("App-dark")) ||
      (theme === "App-dark" && settheme("App"));
    setDarkMode();
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
const mapDispatchToProps = dispatch => {
  return {
    setDarkMode: () => dispatch(setDarkMode())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
