import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { iconColors, darkMap, lightMap } from "../../constants";
import L from "leaflet";
const style = {
  width: "100%",
  height: "300px"
};

function Map(props) {
  const { latitude, longitude, darkMode } = props;
  const iconMarker = new L.Icon({
    iconUrl: (darkMode && iconColors.grey) || iconColors.blue
  });

  let center = [latitude, longitude];

  let marker = L.marker(center, { icon: iconMarker });

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
