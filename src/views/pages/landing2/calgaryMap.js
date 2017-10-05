import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class SimpleMap extends Component {

  static defaultProps = {
    center: {lat: 51.05, lng: -114.07},
    zoom: 11,

  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >

      </GoogleMapReact>
    );
  }
}

export default SimpleMap
