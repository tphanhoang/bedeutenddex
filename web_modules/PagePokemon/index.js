import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import consts from "app/consts"

import { getById as getPokemonById } from "app/reducers/pokemon"
import { getSpecy as getPokemonSpecy } from "app/reducers/pokemon_specy"

import DivDetailPokemon from "DivDetailPokemon"
import DivStatPokemon from "DivStatPokemon"

import {Tabs, Tab} from 'material-ui/lib/tabs'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/lib/card';
import FlatButton from 'material-ui/lib/flat-button';
import Toggle from 'material-ui/lib/toggle';
import {List, ListItem} from 'material-ui/lib/lists';
import Avatar from 'material-ui/lib/avatar';


import SwipeableViews from 'react-swipeable-views';





@connect(
    (state) => ({
        pokemon_detail : state.pokemon_detail,
        pokemon_specy : state.pokemon_specy,
    }),
    (dispatch) => ({
        getPokemonById : (id) => dispatch(getPokemonById(id)),
        getPokemonSpecy : (id) => dispatch(getPokemonSpecy(id)),
    })
)
export default class PagePokemon extends Component {

constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  capitalizeFirstLetter(string) {    
    if(string!=null){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }else{
      return null
    }
  }

  static propTypes = {
      params: PropTypes.shape({
        pokemonId:PropTypes.string,
      }),
      pokemons : PropTypes.object,
      getPokemonById : PropTypes.func,
      getPokemonSpecy : PropTypes.func,
  };

  static defaultProps = {
      params: {},      
      pokemon_detail : null,
      getPokemonById : () => {}
  };

    state = {
        img_gif: ""
    };

  componentDidMount(){
      const {
        params,        
      } = this.props
      this.props.getPokemonById(params.pokemonId)
      this.props.getPokemonSpecy(params.pokemonId)      
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getPokemonById,
      getPokemonSpecy
    } = this.props

    this.setState({img_gif: (params.pokemonId.length < 3 ? params.pokemonId.length < 2 ? "00" + params.pokemonId : "0" + params.pokemonId : params.pokemonId)})

    if(nextProps.params.pokemonId!=params.pokemonId){
      getPokemonById(nextProps.params.pokemonId)
      getPokemonSpecy(nextProps.params.pokemonId)
    }
  }

  render() {
    const {
      params,      
      pokemon_detail,
      pokemon_specy,
    } = this.props ;
      
    return(
      <div>
        <Card>
          <CardMedia          
            overlay={<CardTitle title={this.capitalizeFirstLetter(pokemon_detail.name)} 
              subtitle=  
                {
                  pokemon_detail.types &&
                  pokemon_detail.types.map((type, index) => {
                    const isLastType = index<pokemon_detail.types.length-1;
                    return <span key={index}>{this.capitalizeFirstLetter(type.type.name)}{isLastType && ", "}</span>
                  })
                }
            />}
          >
            <img src={'/img/pokemons/pokemon'+params.pokemonId+'.jpg'} />
          </CardMedia>
          <CardHeader
            title={this.capitalizeFirstLetter(pokemon_detail.name)}
            titleColor={"#fff"}
            style={{background:(pokemon_specy.color!=null?pokemon_specy.color.name:"#fff")}}
            avatar={
              <Avatar src={'http://sprites.pokecheck.org/i/'+ this.state.img_gif +'.gif'} style={{background:"#FFF"}}/>
            }
            subtitle=
            {
              pokemon_detail.types &&
              pokemon_detail.types.map((type, index) => {
                const isLastType = index<pokemon_detail.types.length-1;
                return <span key={index}>{this.capitalizeFirstLetter(type.type.name)}{isLastType && ", "}</span>
              })
            }                 
          />
          <CardText>
            {
              !pokemon_specy.flavor_text_entries &&
              <div style={{textAlign:'center'}}><img src="http://orig09.deviantart.net/cd96/f/2014/102/8/c/pokeball_wub_by_rockehjamaa-d7e6km8.gif" 
              /><br/><span>Loading !</span></div>        
            }
            {
              pokemon_specy.flavor_text_entries &&
              pokemon_specy.flavor_text_entries[1].flavor_text
            }
          </CardText>        
          <DivStatPokemon pokemon_detail_stats={pokemon_detail.stats}/>
          <Toggle
              toggled={this.state.expanded}
              onToggle={this.handleToggle}
              labelPosition="right"
              label="Show Details"
              style={{padding:"20px",marginTop:"15px"}}/>        
          <CardText expandable={!this.state.expanded} >
            <DivDetailPokemon 
              pokemon_detail_abilities={pokemon_detail.abilities}
              pokemon_detail_moves={pokemon_detail.moves}
              pokemon_detail_height={pokemon_detail.height}
              pokemon_detail_weight={pokemon_detail.weight}
            />            
          </CardText>
        </Card>
      </div>
                

    )
   
  }
}
