import React, {PropTypes, Component} from 'react';
import {Tabs, Tab} from 'material-ui/lib/tabs'

import {List, ListItem} from 'material-ui/lib/lists';
import SwipeableViews from 'react-swipeable-views';


var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default class DivDetailPokemon extends Component {

constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  static propTypes = {
    region: PropTypes.string,
    version_groups: PropTypes.array,
      pokemon_entries_length: PropTypes.number,
  };

  static defaultProps = {
      region: null,        
      pokemon_entries_length: null,
  };

  handleChange = (value) => {    
    this.setState({
      slideIndex: value,
    });
  };

  capitalizeFirstLetter(string) {
    if(string!=null){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }else{
      return null
    }
  }

  render() {        
    const {        
      pokemon_detail_abilities,
      pokemon_detail_moves,
      pokemon_detail_height,
      pokemon_detail_weight,
    } = this.props
    
    return (        
      <div>       
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          style={{'background': '#F44336'}}
          inkBarStyle={{'background':'#c6c6c6'}}          
        >
          <Tab label="Divers" value={0}  style={{'background': '#F44336'}}/>
          <Tab label="Abilities" value={1} style={{'background': '#F44336'}}/>
          <Tab label="Moves" value={2} style={{'background': '#F44336'}}/>
        </Tabs>
        <SwipeableViews

          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <List style={{paddingTop:"0px"}}>
            <ListItem  primaryText={"Height : "+(pokemon_detail_height*0.1)+" m"}  />
            <ListItem  primaryText={"Weight : "+(pokemon_detail_weight*0.1)+" kg"}  />          
          </List>
          <List style={{paddingTop:"0px"}}>

            {           
            pokemon_detail_abilities &&
            pokemon_detail_abilities.map((ability, index) => {            
              return <ListItem  key={index} primaryText={this.capitalizeFirstLetter(ability.ability.name)}  />            
            })                  
              
            }
          </List>
          <List style={{paddingTop:"0px"}}>

            {           
          pokemon_detail_moves &&
          pokemon_detail_moves.map((move, index) => {            
            return <ListItem  key={index} primaryText={this.capitalizeFirstLetter(move.move.name)}/>            
          })                  
              
            }
          </List>
        </SwipeableViews>
      </div>  
   )
  }
}

