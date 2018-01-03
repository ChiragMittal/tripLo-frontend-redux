import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import * as userAPI from '../../../APIs/user'


// Flux product view
class FluxSinglePost extends React.Component {

  changeLike(e) {
    let _this = this;
    userAPI.likePost(this.props.post.id)
      .then((res) => {
        //console.log(JSON.stringify(_this.props))
        _this.props.liked(res.post_id, res.post_like);
        //_this.props.receiveProduct(res.response);
      })
  }



  // Render product View
  render() {
    //var fav ={this.props.post.destination_categories}
    var imagePic = (this.props.post.image == null ? 'default.png' : this.props.post.image)
    return (
      <div className="flux-single-post">
        <div className="hello row">
          <img src={'../../../public/img/' + imagePic} className="post_userPic" />
          <p className="post_username">@{this.props.post.username}</p>
          <p className="post_time">{this.props.post.created_at}</p>
        </div>
        <p>{this.props.post.post}</p>

        <div>
          <a><i className="thums-up" onClick={this.changeLike.bind(this)}><Glyphicon glyph="thumbs-up" />{this.props.post.likes}</i></a>
          <a href="#"><i className="pushpin"><Glyphicon glyph="pushpin" /></i></a>
          <a href="#"><i className="share-alt"><Glyphicon glyph="share-alt" /></i></a>
        </div>
      </div>
    );
  }

};

export default FluxSinglePost;