import React from 'react';
//import { CartStore } from '../../Stores/cartStore';
//import { ProductStore } from '../../Stores/tripStore';
//import { MapStore } from '../../Stores/mapStore';
import { FluxProduct } from './trip.react.js';
import { FluxCart } from './tripcart.react.js';
//var Container=require('./container.react.js');
import Container from './container.react.js';

//import NpsForecastMap from './container.react.js';


// Method to retrieve state from Stores
function getCartState() {
  return {
    product: {},
    selectedProduct: {},
    cartItems: {},
    cartCount: {},
    // cartTotal: CartStore.getCartTotal(),
    cartVisible: {},
    //,user: CartStore.getUserLoggedIn()            -> server request for logged in user data
    mapMarkers: {},
    mapCentre: {}
  };
}

// Define main Controller View
class FluxCartApp extends React.Component {

  // Get initial state from stores
  getInitialState() {
    return getCartState();
  }

  // Add change listeners to stores
  componentDidMount() {

  }

  // Remove change listeners from stores
  componentWillUnmount() {

  }

  // Render our child components, passing state via props
  render() {
    return (
      <div className="flux-cart-app">

        <Container google={window.google} markers={this.props.Destination.mapMarkers} initialCenter={this.props.Destination.mapCentre} />

        <FluxCart products={this.props.Destination.cartItems} count={this.props.Destination.cartCount} visible={this.props.Destination.cartVisible} />

        {(this.props.Destination.product).map(function (value, index) {
          return (
            <FluxProduct product={value} />
          )
        })}

      </div>

    );
  }


};

export default FluxCartApp;
