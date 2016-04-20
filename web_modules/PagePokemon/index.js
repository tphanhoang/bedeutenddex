import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import { getById as getPokemonById } from "app/reducers/pokemon"

import ItemDetails from "ItemDetails"

@connect(
    (state) => ({
        pokemon : state.pokemon
    }),
    (dispatch) => ({
        getPokemonById : (id) => dispatch(getPokemonById(id)),
    })
)
export default class PagePokemon extends Component {

  static propTypes = {
      params: PropTypes.shape({
        pokemonId:PropTypes.string,
      }),
      pokemons : PropTypes.object,
      getPokemonById : PropTypes.func,
  };

  static defaultProps = {
      params: {},
      pokemon : null,
      getPokemonById : () => {}
  };

  componentWillMount(){

      const {
        params,        
      } = this.props
      this.props.getPokemonById(params.pokemonId)
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getPokemonById,
    } = this.props

    if(nextProps.params.pokemonId!=params.pokemonId){
      getPokemonById(nextProps.params.pokemonId)
    }
  }

  render() {
    const {
      params,
      pokemon,
    } = this.props

    if(this.props.pokemon[params.pokemonId]){
    return (
    
      
      <div>
          
           
            <ItemDetails name={this.props.pokemon[params.pokemonId].name}
                         image={"http://pokeapi.co/media/sprites/pokemon/"+params.pokemonId+".png"} />                                                 
    
    
   
      </div>
    
    )}else{
      return(<div></div>)
    }
  }
}
