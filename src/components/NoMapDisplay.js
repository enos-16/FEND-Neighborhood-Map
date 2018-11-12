import React, { Component } from "react";

class NoMapDisplay extends Component {
  state = {
    show: false,
    timeout: null
  };

  componentDidMount = () => {
    let timeout = window.setTimeout(this.showMessage, 1000);
    this.setState({ timeout });
  };

  componentWillUnmount = () => {
    window.clearTimeout(this.state.timeout);
  };

  showMessage = () => {
    this.setState({ show: true });
  };

  render = () => {
    return (
      <div>
        {this.state.show ? (
          <div>
            <h1>Error Loading Map</h1>
            <p>Could not load map due to network error, please try again</p>
          </div>
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    );
  };
}

export default NoMapDisplay;