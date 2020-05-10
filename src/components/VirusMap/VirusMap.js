import React, { Component } from "react";
import styles from "./VirusMap.module.css";
import { fetchMapData } from "../../api";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { convertCountryName } from "../../utils/convertCountryName";

export default class VirusMap extends Component {
  state = {
    places: [],
    selectedCountry: this.props.country,
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

  componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country) {
      this.update();
      this.setState({ selectedCountry: this.props.country });
    }
  }

  update = () => {
    const place = this.state.places.filter(
      (item) => item.name === convertCountryName(this.props.country)
    );
    if (place.length === 0) return;
    this.setState((prevState) => {
      return {
        viewport: {
          ...prevState.viewport,
          latitude: place[0].latitude,
          longitude: place[0].longitude,
          zoom: 2,
        },
      };
    });
  };

  handlePlaceInfoClick = () => {
    this.setState({ selectedCountry: "" });
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
        },
      };
    });
  };
  renderPoints = () => {
    const { places, selectedCountry } = this.state;
    return places.map((place, id) => {
      const circleSize = place.confirmed / 5000;
      const popup =
        convertCountryName(selectedCountry) === place.name ? (
          <Popup
            onClose={this.handlePlaceInfoClick}
            latitude={place.latitude}
            longitude={place.longitude}
          >
            <div>
              <h3 className={styles.infoTitle}>{place.name} </h3>
              <div>{`Confirmed: ${place.confirmed}`}</div>
              <div>{`Deaths: ${place.deaths}`}</div>
              <div>{`Recovered: ${place.recovered}`}</div>
            </div>
          </Popup>
        ) : null;
      return (
        <div key={place.name}>
          <Marker longitude={place.longitude} latitude={place.latitude}>
            <div
              className={styles.marker}
              style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
              onClick={() => this.handleCountrySelected(place)}
            ></div>
            <div
              className={styles.placeInfo}
              onClick={this.handlePlaceInfoClick}
            >
              <div className={styles.infoTitle}>{place.name} </div>
              <div className={styles.statistics}>
                <div>{`Confirmed: ${place.confirmed}`}</div>
                <div>{`Deaths: ${place.deaths}`}</div>
                <div>{`Recovered: ${place.recovered}`}</div>
              </div>
            </div>
          </Marker>
          {popup}
        </div>
      );
    });
  };

  render() {
    const { places, viewport } = this.state;
    if (places.length === 0)
      return <div className={styles.container}>Loading map...</div>;

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
