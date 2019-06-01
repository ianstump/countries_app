import React, { useEffect, useRef } from "react";
import { Connect } from "react-redux"
import L from "leaflet";

const style = {
    width: "100%",
    height: "300px"
};

function Map(props) {
    const { coord } = props.coord
    const center = [Object.values(coord)[0], Object.values(coord)[1]]
    // create map
    const mapRef = useRef(null);
    useEffect(() => {
        mapRef.current = L.map("map", {
            center: center,
            zoom: 16,
            layers: [
                L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        });
    }, [props.coord]);

    // add marker


    return <div id="map" style={style} />;
}

const mapStateToProps = state => {
    return {
        coord: state.coord
    }
}

export default connect(mapStateToProps)(Map);

