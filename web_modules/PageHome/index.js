import React, {PropTypes, Component } from 'react';
import {connect} from "react-redux"
import TablePokedexInfos from "TablePokedexInfos";
import { get as getPokedex } from "app/reducers/pokedex"
import {Link, IndexLink} from 'react-router'
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import styles from "./index.css"

@connect(
    (state) => ({
        pokedex : state.pokedex
    }),
    (dispatch) => ({
        getPokedex : (value) => dispatch(getPokedex(value)),
    })
)
export default class PageHome extends Component {

  static defaultProps = {
      pokedex: null,        
  };

  capitalizeFirstLetter(string) {
    if(string!=null){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }else{
      return null
    }
  }

  componentWillMount() {
    this.props.getPokedex(2)     
  };


  render() {        
    const {                  
      pokedex
    } = this.props

  return (
      <div className={styles.container}>
      

          {
          !pokedex.region &&
          <div style={{textAlign:'center'}}><img src="http://orig09.deviantart.net/cd96/f/2014/102/8/c/pokeball_wub_by_rockehjamaa-d7e6km8.gif" 
          /><br/><span>Loading !</span></div>        
          }


      
        {
          pokedex.region &&
          <TablePokedexInfos 
            region={pokedex.region.name} 
            version_groups={pokedex.version_groups} 
            pokemon_entries_length={pokedex.pokemon_entries.length} 
            title="1st Gen Pokemon"
            description={pokedex.descriptions!=null?pokedex.descriptions[2].description:null}
            />
        }
        <List>
          { 
            pokedex.pokemon_entries &&
            pokedex.pokemon_entries.map((pokemon, index) => {                    
              return ( 
                <Link key={index} style={{"textDecoration":"none"}} to={'/pokemon/'+pokemon.entry_number} >
                  <ListItem 
                    primaryText={this.capitalizeFirstLetter(pokemon.pokemon_species.name)}
                    leftAvatar={<Avatar src={'http://pokeapi.co/media/sprites/pokemon/'+pokemon.entry_number+'.png'} />}
                  />
                </Link>
              );
            })
          }        
        </List>
      </div>
  )

}}

