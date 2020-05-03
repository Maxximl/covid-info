import React, { Component } from "react";
import styles from "./VirusMap.module.css";
import { getMapData } from "../../api";
//import { YMaps, Map, Placemark } from "react-yandex-maps";
import ReactMapGl, { Marker } from "react-map-gl";

export default class VirusMap extends Component {
  state = {
    places: [],
    viewport: {
      latitude: 30.1231,
      longitude: 10.12312,
      zoom: this.props.zoom,
      width: "100%",
      height: "100%",
    },
  };

  async componentDidMount() {
    this.setState({ places: await getMapData() });
  }

  setViewport = (viewport) => {
    this.setState({ viewport: viewport });
  };

  renderPoints = () => {
    const { places } = this.state;
    return places.map((place, id) => {
      const circleSize = place.confirmed / 5000;
      return (
        <Marker
          key={place.name}
          longitude={place.longitude}
          latitude={place.latitude}
        >
          <div
            className={styles.marker}
            style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
            onClick={() => {this.props.onCountrySelected(place.name);
              this.setState({viewport: {latitude: place.latitude,
                longitude: place.longitude,
                zoom: 2,
                width: "100%",
                height: "100%",
              }})
            }}
          ></div>
          <div className={styles.placeInfo}>
            <div className={styles.infoTitle}>{place.name}</div>
            <div className={styles.statistics}>
              <div>{`Confirmed: ${place.confirmed}`}</div>
              <div>{`Deaths: ${place.deaths}`}</div>
              <div>{`Recovered: ${place.recovered}`}</div>
            </div>
          </div>
        </Marker>
      );
    });
  };

  render() {
    const { places, viewport } = this.state;
    if (places.length === 0) return <div className={styles.container}>LOading...</div>;

    return (
      <div className={styles.container}>
        <ReactMapGl
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoibWF4eGltbCIsImEiOiJjazlsbTV4dGcwOHBrM2xwZGxrc240NmxoIn0.3gJraL3R-IbUHg-8UWVPKQ"
          onViewportChange={(viewport) => {
            this.setViewport(viewport);
          }}
        >
          {this.renderPoints()}
        </ReactMapGl>
      </div>
    );
  }
}
