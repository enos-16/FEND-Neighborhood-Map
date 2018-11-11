import React, { Component } from "react";
import MapDisplay from "./components/MapDisplay";
import locations from "./data/locations"; // data for locations on the map
import "./App.css";

class App extends Component {
  state = {
    lat: 40.8488511,
    lng: -73.93837019999999,
    zoom: 15,
    all: locations
  };

  render = () => {
    return (
      <div className="App">
        <div className="header">
          <h1>Favorite Washington Heights Restaurants</h1>
        </div>
        <MapDisplay
          lat={this.state.lat}
          lng={this.state.lng}
          zoom={this.state.zoom}
          locations={this.state.all}
        />
      </div>
    );
  };
}

export default App;
