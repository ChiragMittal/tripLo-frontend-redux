import React from 'react';
import ReactDOM from 'react-dom';

import Map, { GoogleApiWrapper },Marker, InfoWindow  from 'google-maps-react';

class WithMarkers extends React.Component {

  constructor(props) {
    super(props)
  }

  getInitialState() {
    return {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onInfoWindowClose() {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <Map google={this.props.google}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        className={'map'}
        zoom={14}
        onClick={this.onMapClicked}>
        <Marker
          onClick={this.onMarkerClick}
          name={'hello'}
          position={{ lat: 28.5535, lng: 77.2588 }} />
        <Marker
          onClick={this.onMarkerClick}
          name={'Dolores park'}
          position={{ lat: 28.6129, lng: 77.2295 }} />
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
};

export default WithMarkers;
