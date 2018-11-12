# FEND Project 7: Neighborhood Map

## Overview

This is my Project 7 for FEND. This project was built on React with some APIs and has a few dependencies. The main ones are listed below:

- Google Maps
- FourSquare
- Font Awesome
- React Material-UI for the List Drawer
- google-maps-react to render the primary map

## Features

This app shows a list of my favorite restaurants in my neighborhood. The restaurants are displayed with a marker, and clicking on the marker will display the name, a link to their site, and a photo from FourSquare(if one is available). The app also contains a drawer with the list of restaurants that can be filtered, and clicking on the list item will show the same info window as clicking on the marker.

Clicking anywhere on the map closes the info window, and clicking anywhere outside of the list drawer closes the list.

## Setup

To get this project running please follow the steps below:

- Clone this repo from:
- `cd` into the newly created folder
- Run `npm install` to install all the dependencies
- Run `npm start` to start the server locally

**Note: The this app was bootstrapped with create-react-app and the standard service worker has been enabled. However, this will only be available when running a production build, and will not function properly when running locally.**
