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
    filtered: null,
    open: false,
    selectedIndex: null
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

  componentDidMount = () => {
    this.setState({
      ...this.state,
      filtered: this.filterLocations(this.state.all, "")
    });
  };

  toggleDrawer = () => {
    // toggle the drawer list open/closed
    this.setState({
      open: !this.state.open
    });
  };

  updateSearch = search => {
    //update search
    this.setState({
      ...this.state,
      selectedIndex: null,
      filtered: this.filterLocations(this.state.all, search)
    });
  };

  filterLocations = (locations, search) => {
    return locations.filter(location => {
      return location.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  clickListItem = index => {
    this.setState({
      selectedIndex: index,
      open: !this.state.open
    });
  };

  render = () => {
    return (
      <div className="App">
        <div style={this.styles.header}>
          <button onClick={this.toggleDrawer} style={this.styles.menuButton}>
            <i className="fa fa-bars" />
          </button>
          <h1>Favorite Washington Heights Restaurants</h1>
        </div>
        <MapDisplay
          lat={this.state.lat}
          lng={this.state.lng}
          zoom={this.state.zoom}
          locations={this.state.filtered}
          selectedIndex={this.state.selectedIndex}
        />
        <ListDrawer
          locations={this.state.filtered}
          open={this.state.open}
          toggleDrawer={this.toggleDrawer}
          filterLocations={this.updateSearch}
          clickListItem={this.clickListItem}
        />
      </div>
    );
  };
}

export default App;
