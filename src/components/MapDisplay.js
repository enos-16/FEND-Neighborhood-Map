import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

class MapDisplay extends Component {
  state = {
    map: null
  };

  mapReady = (props, map) => {
    this.setState({ map });
  };

  render() {
    const mapStyles = ["width: 100%", "height: 100%"];
    const center = {
      lat: this.props.lat,
      lng: this.props.lng
    };

    return (
      <Map
        role="application"
        aria-label="map"
        onReady={this.mapReady}
        google={this.props.google}
        zoom={this.props.zoom}
        styles={mapStyles}
        initialCenter={center}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCV3zAwq168vlzJtoIzFUA7Om3SXyPKUYA"
})(MapDisplay);
