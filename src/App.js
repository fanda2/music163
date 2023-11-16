import React, {Suspense, memo} from 'react'
import './assets/css/reset.css'
import "./assets/css/popcover.css"
import { renderRoutes } from 'react-router-config'
import routes from './router'
import {Provider} from "react-redux"
import store from "./store"


import {HashRouter} from "react-router-dom"
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './pages/player/app-player-bar'

export default memo( function App() {
  return (
    <Provider store={store}>
      <HashRouter>
          <AppHeader/>
          <Suspense>
              { renderRoutes(routes)}
          </Suspense>
          <AppPlayerBar/>
          <AppFooter/>
      </HashRouter >
      </Provider>
  )
})
