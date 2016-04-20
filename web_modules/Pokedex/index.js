import React, {PropTypes, Component } from 'react';
import {connect} from "react-redux"
import debounce from 'lodash.debounce';

import CardPokemon from "CardPokemon";

import { get as getPokedex } from "app/reducers/pokedex"
import {Link, IndexLink} from 'react-router'

import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';

import styles from "./index.css"

@connect(
    (state) => ({
        pokedex : state.pokedex
    }),
    (dispatch) => ({
        getPokedex : (value) => dispatch(getPokedex(value)),
    })
)
export default class Pokedex extends Component {

    static propTypes = {
        title: PropTypes.string,
        items: PropTypes.array,
        onInputChange: PropTypes.func,
        onItemClick: PropTypes.func,
        autoFilter: PropTypes.bool,
        limit: PropTypes.number,
    };

    static defaultProps = {
        title: "",
        items: [],
        onInputChange: null,
        onItemClick: null,
        autoFilter: true,
        limit: -1,
    };

  static contextTypes = {
      router: PropTypes.object,
  };

    state = {
        inputValue: ""
    };

    onChangeHandler = (value) => {
      this.setState({inputValue: value})
    };

    filterName = (item) => {
      return (item.name && item.name.toLowerCase().search(this.state.inputValue.toLowerCase())!=-1);
    };

    
  selectPokemon = (item) => {
    console.log(item);
      //this.context.router.push(`/pokemon/${item.id}`)
  };


    componentWillMount() {
      this.props.getPokedex(2)     
    };


    render() {        
      const {
        title,
        items,
        onInputChange,
        autoFilter,
        limit,
        pokedex
      } = this.props



              

    return (
        <div  className={styles.container}>
        <List>
            { 
              pokedex.pokemon_entries &&
              pokedex.pokemon_entries.map((pokemon, index) => {                    
                return ( <Link to={'/pokemon/'+pokemon.entry_number} >
                    <ListItem key={index} 
                            onClick={this.selectPokemon}
                            primaryText={pokemon.pokemon_species.name}
                            leftAvatar={<Avatar src={'http://pokeapi.co/media/sprites/pokemon/'+pokemon.entry_number+'.png'} />}
                            
                            /></Link>
                );
              })
          }
          
        </List>
        </div>
    )

}}

