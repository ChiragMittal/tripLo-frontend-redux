import React from 'react'
import { addToCart, updateCartVisible } from '../../actions/fluxcartActions'

import { Button } from 'react-bootstrap';

// Flux product view
class FluxProduct extends React.Component {

  constructor(props) {
    super(props);
  }

  // Add item to cart via Actions
  addToCart(event) {
    let name = this.props.product.name;
    let id = this.props.product.id;

    addToCart(id, name);
    updateCartVisible(true);
  }

  // Render product View
  render() {

    let imagePic = (this.props.product.image == null ? 'default.png' : this.props.product.image)
    return (
      <div className="trip-part">



        <div className="flux-product-detail">
          <h1 className="name">{this.props.product.name}</h1>
          <img src={'public/img/' + imagePic} />
          <p className="description">{this.props.product.description}</p>

          <Button bsStyle="success" bsSize="large" onClick={this.addToCart} >
            Add
          </Button>
        </div>
      </div>
    );
  }

};

export default FluxProduct;
