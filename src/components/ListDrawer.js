import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";

class ListDrawer extends Component {
  state = {
    open: false,
    search: ""
  };

  styles = {
    list: {
      width: "250px",
      padding: "0px 15px 0px"
    },
    noBullets: {
      listStyleType: "none",
      padding: 0
    },
    fullList: {
      width: "auto"
    },
    listItem: {
      marginBottom: "15px"
    },
    listLink: {
      background: "transparent",
      border: "none",
      color: "black"
    },
    filterEntry: {
      border: "1px gray solid",
      padding: "3px",
      margin: "30px 0px 10px",
      width: "100%"
    }
  };

  updateSearch = newSearch => {
    //update search
    this.setState({
      search: newSearch
    });
  };

  render = () => {
    return (
      <div>
        <Drawer open={this.props.open} onClose={this.props.toggleDrawer}>
          <div style={this.styles.list}>
            <input
              style={this.styles.filterEntry}
              type="text"
              placeholder="Filter List"
              name="filter"
              onChange={e => {
                this.updateSearch(e.target.value);
              }}
              value={this.state.search}
            />
            <ul style={this.styles.noBullets}>
              {this.props.locations &&
                this.props.locations.map((location, index) => {
                  return (
                    <li style={this.styles.listItem} key={index}>
                      <button style={this.styles.listLink} key={index}>
                        {location.name}
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
        </Drawer>
      </div>
    );
  };
}

export default ListDrawer;
