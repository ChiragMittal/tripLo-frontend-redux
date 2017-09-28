import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter as Router, routerMiddleware, push } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducer from './src/store/reducers'
import DevTools from './src/containers/DevTools'

import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'

// import css
import './assets/css/index.scss'
// import jQuery from 'jquery'
import 'bootstrap'

import MainContainer from './src/MainContainer'

const history = createHistory()

const middleware = routerMiddleware(history)
const appMiddlewares = [thunk, middleware]

const enhancer = compose(
  applyMiddleware(...appMiddlewares),
  DevTools.instrument()
)

const persistedState = loadState()
const store = createStore(
  reducer,
  persistedState,
  enhancer
  // applyMiddleware(...appMiddlewares)
)

store.subscribe(throttle(() => {
  saveState({
    auths: store.getState().auths
  })
}, 1000))

const renderApp = component => (
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <div>
          <Router history={history}>
            <Route component={component} />
          </Router>
          <DevTools />
        </div>
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
);

renderApp(MainContainer);

if (module.hot) {
  module.hot.accept('./src/App', () => {
    const NextApp = require('./src/MainContainer').default;
    //const newRoute = require('./routes').default;
    console.info("Accepting change in App file");
    renderApp(NextApp);
  });
}
