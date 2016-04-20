import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

window.__DEVTOOLS__ = !(process.env.NODE_ENV === 'production');
import { combineReducers } from "redux"
import { Provider } from "react-redux"
import createStore from "app/redux/createStore"
import * as reducers from "app/reducers"
const store = createStore(combineReducers(reducers))

import App from "./App"
import PageHome from "PageHome"
import Pokedex from "Pokedex"
import PagePokemon from "PagePokemon"
import PageArtist from "PageArtist"
import PageDiscover from "PageDiscover"
import PageNotFound from "PageNotFound"

import DevTools from "app/redux/createDevTools"

let devtools = null
if (__DEVTOOLS__) {
    devtools = (
      <DevTools store={store}/>
    )
}

export default class Routes extends Component {

  render() {
    return (
      <div>
       <Provider store={ store }>
          <Router history={browserHistory}>
            <Route path="/" component={App}>
            <Route path="pokedex" component={Pokedex}/>
            <Route path="pokemon/:pokemonId" component={PagePokemon}/>
                <Route path="artist/:artistId" component={PageArtist}/>
                <Route path="discover" component={PageDiscover}/>
                <IndexRoute component={PageHome} />
            </Route>
            
          </Router>
        </Provider>
        { __DEVTOOLS__ && devtools }
      </div>
    )
  }
}
