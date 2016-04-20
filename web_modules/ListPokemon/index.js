import React, {PropTypes, Component } from 'react';
import debounce from 'lodash.debounce';

import CardPokemon from "CardPokemon";

export default class ListPokemon extends Component {

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

    state = {
        inputValue: ""
    };

    onChangeHandler = (value) => {
      this.setState({inputValue: value})
    };

    filterName = (item) => {
      return (item.name && item.name.toLowerCase().search(this.state.inputValue.toLowerCase())!=-1);
    };

    


    render() {        
      const {
        title,
        items,
        onInputChange,
        onItemClick,
        autoFilter,
        limit,
      } = this.props


    return (
        <div>
            { 
              items &&
              items.map((item, index) => {    
                item.id = item.url.substr(33).replace("/","")

                return (
                    <CardPokemon  key={index}  name={item.name} pid={item.id} url={item.url}/>
                );
              })
          }
        </div>
    )

    }
}
