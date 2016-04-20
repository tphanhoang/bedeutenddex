import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"
import InputList from "InputList";

import { get as getPokemons } from "app/reducers/pokemons"

import ListPokemon from "ListPokemon";

@connect(
    (state) => ({
        pokemons : state.pokemons
    }),
    (dispatch) => ({
        getPokemons : (value) => dispatch(getPokemons(value)),
    })
)
export default class PageHome extends Component {

  state = {
    pokemons: null,
  };

  static propTypes = {
      pokemons : PropTypes.object,
      getPokemons : PropTypes.func,
  };


  componentDidMount() {
    this.props.getPokemons(2)
   //   this.fetchPokemons();

  };

  componentWillReceiveProps(nextProps){

  }

  render() {
    
    return (
      <div>      
        <ListPokemon items={this.props.pokemons.results} />
              
      </div>
    )
  }
}
