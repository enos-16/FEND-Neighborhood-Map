import React, { Component } from "react";
import MapDisplay from "./components/MapDisplay";
import ListDrawer from "./components/ListDrawer";
import locations from "./data/locations"; // data for locations on the map
import "./App.css";

class App extends Component {
  state = {
    lat: 40.8488511,
    lng: -73.93837019999999,
    zoom: 15,
    all: locations,
    open: false
  };

  styles = {
    menuButton: {
      marginLeft: 10,
      marginRight: 20,
      position: "absolute",
      left: 10,
      top: 20,
      background: "white",
      padding: 10
    },
    hide: {
      display: "none"
    },
    header: {
      marginTop: "0px"
    }
  };

  toggleDrawer = () => {
    // toggle the drawer list open/closed
    this.setState({
      open: !this.state.open
    });
  };

  render = () => {
    return (
      <div className="App">
        <div>
          <button onClick={this.toggleDrawer} style={this.styles.menuButton}>
            <i className="fa fa-bars" />
          </button>
          <h1>Favorite Washington Heights Restaurants</h1>
        </div>
        <MapDisplay
          lat={this.state.lat}
          lng={this.state.lng}
          zoom={this.state.zoom}
          locations={this.state.all}
        />
        <ListDrawer
          locations={this.state.all}
          open={this.state.open}
          toggleDrawer={this.toggleDrawer}
        />
      </div>
    );
  };
}

export default App;
