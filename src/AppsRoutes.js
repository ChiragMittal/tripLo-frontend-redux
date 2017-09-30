import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './containers_components/Home'
import Login from './containers_components/Login'
import NoMatch from './containers_components/NoMatch'
import FluxCartApp from './containers_components/Destination_Search/tripcartapp.react'
import DestinationSearch from './containers_components/Destination_Search'

class AppsRoutes extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let appProps = this.props;
    return (

      <Switch>
        {/* Will redirect to auth in booting app */}
        <Route exact path="/" render={(props) => (<Home {...appProps} />)} />
        <Route exact path="/login" {...appProps} render={(props) => (<Login {...appProps} />)} />
        <Route exact path="/destination/search" render={(props) => (<DestinationSearch {...appProps} />)} />
        {/* <Route exact path="/destination/search" render={(props) => (<FluxCartApp {...appProps} />)} /> */}
        {/* Accessing auth directly will bring to login page */}
        <Route component={NoMatch} />
      </Switch>

    );
  }

}

AppsRoutes.propTypes = {
  Auth: PropTypes.object
}

export default AppsRoutes;
