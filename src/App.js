import React, { Component } from "react";
import MapDisplay from "./components/MapDisplay";
import "./App.css";

class App extends Component {
  state = {
    lat: 40.846893,
    lng: -73.938729,
    zoom: 15
  };

  render = () => {
    return (
      <div className="App">
        <div>
          <h1>Favorite Washington Heights Restaurants</h1>
        </div>
        <MapDisplay
          lat={this.state.lat}
          lng={this.state.lng}
          zoom={this.state.zoom}
        />
      </div>
    );
  };
}

export default App;
