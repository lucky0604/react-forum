import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loader from './components/loader'
import HeaderContainer from './containers/header'
import NotFoundPage from './components/notfoundpage'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <header className="header-background" />
      <div className="app-layout">
        <HeaderContainer />
        <Switch>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Fragment>
  </BrowserRouter>
  , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
