import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow } from "google-maps-react";

const GoogleKey = "AIzaSyCV3zAwq168vlzJtoIzFUA7Om3SXyPKUYA";
const CLIENT_ID = "1WUIYNKZCO5ABUOWXICQFFSY10JUWKFMRP3L5W2L3OOEFL3H";
const CLIENT_SECRET = "4EW4HKTMV3O4AWG1DOM4VR4ZZDVRLW0XVGPPVI42NVYC1COU";
const FS_V = 20180323;

class MapDisplay extends Component {
  state = {
    map: null,
    markers: [],
    markerProps: [],
    activeMarker: null,
    activeMarkerProps: null,
    showingInfoWindow: false
  };

  /* componentWillReceiveProps = props => {
    // Change in the number of locations, so update the markers
    if (this.state.markers.length !== props.locations.length) {
      this.onMarkerClose();
      this.updateMarkers(props.locations);
      this.setState({ activeMarker: null });

      return;
    }

    // The selected item is not the same as the active marker, so close the info window
    if (
      !props.selectedIndex ||
      (this.state.activeMarker &&
        this.state.markers[props.selectedIndex] !== this.state.activeMarker)
    ) {
      this.onMarkerClose();
    }

    // Make sure there's a selected index
    if (props.selectedIndex === null) {
      return;
    }

    // Treat the marker as clicked
    this.onMarkerClick(
      this.state.markerProps[props.selectedIndex],
      this.state.markers[props.selectedIndex]
    );
  }; */

  mapReady = (props, map) => {
    // Sets map state and preps for marker location
    this.setState({ map });
    this.updateMarkers(this.props.locations);
  };

  onMarkerClick = (props, marker, e) => {
    this.onMarkerClose();

    //Foursquare API Fetch Call
    let url = `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${FS_V}&radius=100&ll=${
      props.position.lat
    },${props.position.lng}`;
    let headers = new Headers();
    let request = new Request(url, {
      method: "GET",
      headers
    });

    // Create props for active marker
    let activeMarkerProps;
    fetch(request)
      .then(response => response.json())
      .then(result => {
        // get business reference from Foursquare
        let restaurant = this.getBusinessInfo(props, result);
        activeMarkerProps = {
          ...props,
          foursquare: restaurant[0]
        };

        // Gets images from foursquare, or returns what is available
        if (activeMarkerProps.foursquare) {
          let url = `https://api.foursquare.com/v2/venues/${
            restaurant[0].id
          }/photos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${FS_V}`;

          fetch(url)
            .then(response => response.json())
            .then(result => {
              activeMarkerProps = {
                ...activeMarkerProps,
                images: result.response.photos
              };
              if (this.state.activeMarker) {
                this.setState({
                  showingInfoWindow: true,
                  activeMarker: marker,
                  activeMarkerProps
                });
              }
            });
        } else {
          this.setState({
            showingInfoWindow: true,
            activeMarker: marker,
            activeMarkerProps
          });
        }
      });

    // check if we have foursquare data for selected restaurant

    this.setState({
      activeMarkerProps: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  getBusinessInfo = (props, data) => {
    // looks and compares Foursquare data agains our dataset
    return data.response.venues.filter(
      item => item.name.includes(props.name) || props.name.includes(item.name)
    );
  };

  onMarkerClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        activeMarkerProps: null
      });
    }
  };

  updateMarkers = locations => {
    if (!locations) {
      return;
    }

    this.state.markers.forEach(marker => marker.setMap(null)); //clears map of any already placed markers

    // Generate parrallel refrences to markers and their properties, as well as add markers to the map
    let markerProps = [];
    let markers = locations.map((location, index) => {
      let tempProps = {
        key: index,
        index,
        name: location.name,
        position: location.pos,
        url: location.url
      };

      markerProps.push(tempProps);

      let animation = this.props.google.maps.Animation.DROP;
      let marker = new this.props.google.maps.Marker({
        position: location.pos,
        map: this.state.map,
        animation
      });
      marker.addListener("click", () => {
        this.onMarkerClick(tempProps, marker, null);
      });

      return marker;
    });

    this.setState({ markers, markerProps });
  };

  render() {
    const mapStyles = ["width: 100%", "height: 100%"];
    const center = {
      lat: this.props.lat,
      lng: this.props.lng
    };

    let actProps = this.state.activeMarkerProps; // active props on the marker

    return (
      <Map
        role="application"
        aria-label="map"
        onReady={this.mapReady}
        google={this.props.google}
        zoom={this.props.zoom}
        styles={mapStyles}
        initialCenter={center}
        onClick={this.onMarkerClose}
      >
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onMarkerClose}
        >
          <div>
            <h4>{actProps && actProps.name}</h4>
            {actProps && actProps.url ? (
              <a href={actProps.url} target="_blank" rel="noopener noreferrer">
                See Site
              </a>
            ) : (
              ""
            )}
            {actProps && actProps.images ? (
              <div>
                <img
                  alt={actProps.name + " food picture"}
                  src={
                    actProps.images.items[0].prefix +
                    "100x100" +
                    actProps.images.items[0].suffix
                  }
                />
                <p>Image from Foursquare</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GoogleKey
})(MapDisplay);
