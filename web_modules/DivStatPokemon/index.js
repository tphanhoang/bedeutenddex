import React, {PropTypes, Component} from 'react';
import LinearProgress from 'material-ui/lib/linear-progress';


export default class DivStatPokemon extends Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  static propTypes = {
      region: PropTypes.string,
      version_groups: PropTypes.array,
      pokemon_entries_length: PropTypes.number,
  };

  render() {        
    const {        
      pokemon_detail_stats,
    } = this.props
  
    return (        
      <div style={{
        padding: "25px",
        fontFamily: "Roboto, sans-serif", 
        fontSize: "12px", 
        color: "color:rgba(0, 0, 0, 0.87)"
      }}>


      {           
        pokemon_detail_stats &&
        pokemon_detail_stats.map((stat, index) => {            
          return (
            <div key={index} style={{padding: "3px"}}>
              <label className="label" style={{padding: "3px"}}>{stat.stat.name}</label>
              <LinearProgress className="progress" mode="determinate" value={(stat.base_stat)/2.5} style={{width:"60%",height: "6px"}} color="#F44336"/>
            </div>
          )              
        })                                
      }      
        

      </div>
   )
  }
}

