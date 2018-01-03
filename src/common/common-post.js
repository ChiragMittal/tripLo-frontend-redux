import React from 'react'
import ReactDOM from 'react-dom'

import { Modal, Button, OverlayTrigger } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

import * as userAPI from '../APIs/user'
// Flux product view
class Post_ extends React.Component {

    send(e) {
        let _this = this
        // let { post_text } = this.refs
        // console.log(this.textarea.value)
        userAPI.createPost(this.post_text.value)
            .then((res) => {
                //console.log(JSON.stringify(_this.props))
                _this.props.createPost(res.post);
                _this.props.closeModal(e)
                //_this.props.receiveProduct(res.response);
            })


    }


    // Render product View
    render() {
        console.log(this.props.showModal)
        //var imagePic = (this.props.user.image == null? 'default.png': this.props.user.image)
        return (
            <div className="static-modal">
                <Modal show={this.props.showModal} >
                    <Modal.Header >
                        <Modal.Title>Share or Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup controlId="formControlsTextarea">
                            <FormControl componentClass="textarea" placeholder="Whats on your mind" inputRef={(ref) => { this.post_text = ref }} />
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closeModal}>Close</Button>
                        <Button className="button-post" onClick={this.send.bind(this)} onHide={this.props.closeModal.bind(this)}>Post</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }

};

export default Post_;