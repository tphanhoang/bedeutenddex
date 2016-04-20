import React, { Component, PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import {connect} from "react-redux"
import { getByUrl as getPokemonByUrl } from "app/reducers/pokemon"

import styles from "./index.css"

@connect(
    (state) => ({
        pokemon : state.pokemon
    }),
    (dispatch) => ({
        getPokemonByUrl : (url) => dispatch(getPokemonByUrl(url)),
    })
)
export default class CardExampleWithAvatar extends Component {

  state = {
    pokemon: null,
  };

  

  uppercaseFirstLetter = (item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);;
  };


  componentWillMount() {
    this.props.getPokemonByUrl(this.props.url)   
  };


  render() {
    console.log(this.props);
        if(this.props.pokemon[this.props.pid]){
    return (
      
      <Card className={styles.card}>
        if(this.props.pokemon.result){
        <CardHeader
          className={styles.cardheader}
          title={this.uppercaseFirstLetter(this.props.pokemon[this.props.pid].name)}
          subtitle={
            this.props.pokemon[this.props.pid].types.map((type, index) => {
              return type.type.name+` `
            })
          }
          avatar={"http://pokeapi.co/media/sprites/pokemon/"+this.props.pid+".png"}
        />
}
                
        <CardTitle title={this.uppercaseFirstLetter(this.props.pokemon[this.props.pid].name)} subtitle="Card subtitle" />
        <CardText>

        </CardText>
      </Card>
    )
  }else{
    return <Card className={styles.card}></Card>
  }  
  }
}



