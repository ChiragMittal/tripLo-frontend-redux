import React from 'react';
import { connect } from 'react-redux'
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
        console.log('Destination ' + JSON.stringify(Destination))
        return (Destination && Destination.destinations && Destination.destinations.length) ? this.renderSearchResult() : this.renderInitial()
    }

    renderInitial() {
        return (
            <div className="flux-cart-app">
                <h1>Initial page</h1>
                <NavBar items={null} {...this.props} />
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

        return (
            <div className="flux-cart-app">

                <Container google={window.google} markers={this.props.Destination.map} initialCenter={this.props.Destination.map[0]} />

                <FluxCart products={this.props.Destination.destinations} count={this.props.Destination.cartCount} visible={this.props.Destination.cartVisible} />

                {(this.props.Destination.destinations).map(function (value, index) {
                    return (
                        <FluxProduct product={value} />
                    )
                })}

            </div>
            // <h1>Search Result</h1>
        );
    }


};

const mapState = state => ({
    Auth: state.Auth,
    Destination: state.Destination
})

export default connect(mapState)(FluxCartApp);
