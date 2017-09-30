import React from 'react';
//import { CartStore } from '../../Stores/cartStore';
//import { ProductStore } from '../../Stores/tripStore';
//import { MapStore } from '../../Stores/mapStore';
import FluxProduct from './trip.react.js';
import FluxCart from './tripcart.react.js';
//var Container=require('./container.react.js');
import Container from './container.react.js';
import NavBar from './nav.react.js'

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

class FluxCartApp extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('aaa')
    }

    componentWillUnmount() {
        console.log('000')
    }

    render() {
        let { Destination } = this.props
        console.log(Destination)
        return (Destination && Object.keys(Destination).length) ? this.renderSearchResult() : this.renderInitial()
    }

    renderInitial() {
        return (
            <div className="flux-cart-app">
                <h1>Initial page</h1>
                <NavBar items={null} />
                <a className='btn-login btn'>asdadasda</a>
                <Container google={window.google} markers={[]} initialCenter={{ lat: 28, lng: 79 }} />

                <FluxCart products={[]} count={0} visible={false} />

                {([]).map(function (value, index) {
                    return (
                        <FluxProduct product={value} />
                    )
                })}

            </div>
        )
    }

    renderSearchResult() {
        console.log('bbb')
        return (
            // <div className="flux-cart-app">

            //     <Container google={window.google} markers={this.props.Destination.mapMarkers} initialCenter={this.props.Destination.mapCentre} />

            //     <FluxCart products={this.props.Destination.cartItems} count={this.props.Destination.cartCount} visible={this.props.Destination.cartVisible} />

            //     {(this.props.Destination.product).map(function (value, index) {
            //         return (
            //             <FluxProduct product={value} />
            //         )
            //     })}

            // </div>
            <h1>Search Result</h1>
        );
    }


};

export default FluxCartApp;
