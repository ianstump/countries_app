import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import L from "leaflet";
const style = {
  width: "100%",
  height: "300px"
};

function Map(props) {
  const lightMap = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
  const darkMap =
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
  const iconColors = {
    grey:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png",
    blue:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png"
  };
  const { latitude, longitude, darkMode } = props;
  var icon = new L.Icon({
    iconUrl: (darkMode && iconColors.grey) || iconColors.blue
  });

  let center = [latitude, longitude];
  let marker = L.marker(center, { icon: icon });

  let mapElement = useRef(null);

  useEffect(() => {
    mapElement.current && mapElement.current.remove();

    mapElement.current = L.map("map", {
      center: center,
      zoom: 6,
      layers: [
        L.tileLayer((darkMode && darkMap) || lightMap, {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
        marker
      ]
    });
  }, [center, darkMode, marker]);

  return <div style={style} className="map" id="map" />;
}

const mapStateToProps = state => {
  return {
    latitude: Object.values(state.coord)[0],
    longitude: Object.values(state.coord)[1],
    darkMode: state.darkMode
  };
};

export default connect(mapStateToProps)(Map);
