import React from 'react';
import Post_ from './common-post'

import { Glyphicon } from 'react-bootstrap';



// Flux product view
class IconBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    modalOpen = (e) => {
        e.stopPropagation()

        this.setState({
            showModal: true
        })

    }

    modalClose = (e) => {
        e.stopPropagation()

        this.setState({
            showModal: false
        })
        console.log(this.state.showModal)
    }

    // Render product View
    render() {
        // console.log(this.state.showModal)
        //var imagePic = (this.props.user.image == null? 'default.png': this.props.user.image)
        return (
            <div>
                <div className="icon-bar">
                    <a href="#" onClick={this.modalOpen}><i className="plus"  ><Glyphicon glyph="plus" /></i></a>
                    <a href="#"><i className="briefcase"><Glyphicon glyph="briefcase" /></i></a>
                    <a href="#"><i className="send"><Glyphicon glyph="send" /></i></a>
                    {/* <a href="#"><i className="fa fa-globe"></i></a>
                 <a href="#"><i className="fa fa-trash"></i></a>  */}

                </div>

                <Post_ showModal={this.state.showModal} closeModal={this.modalClose} {...this.props} />

            </div>
        );
    }

};

export default IconBar;