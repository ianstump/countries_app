import React, { useEffect, useRef } from "react";
import { connect } from "react-redux"
import L from "leaflet";

const style = {
    width: "100%",
    height: "300px"
};

function Map(props) {
    const { latitude, longitude } = props

    let center = [latitude, longitude]
    if (center === undefined) {

    }


    let mapElement = useRef(null);

    useEffect(() => {
        mapElement.current && mapElement.current.remove()

        mapElement.current = L.map("map", {
            center: center,
            zoom: 6,
            layers: [
                L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        });

    }, [center]);

    return <div style={style} id="map" />;
}

const mapStateToProps = state => {

    return {
        latitude: Object.values(state.coord)[0],
        longitude: Object.values(state.coord)[1]
    }
}

export default connect(mapStateToProps)(Map);

