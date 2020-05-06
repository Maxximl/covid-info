import React, { Component } from "react";
import styles from "./VirusMap.module.css";
import { fetchMapData } from "../../api";
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
    this.setState({ places: await fetchMapData() });
  }

  setViewport = (viewport) => {
    this.setState({ viewport: viewport });
  };

  handleCountrySelected = (place) => {
    this.props.onCountrySelected(place.name);
    this.setState((prevState) => {
      return {
        viewport: {
          ...prevState.viewport,
          latitude: place.latitude,
          longitude: place.longitude,
          zoom: 2,
        }
      }
    })

  }
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
            onClick={this.handleCountrySelected.bind(this, place)}
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
    if (places.length === 0) return <div className={styles.container}>Loading map...</div>;

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
