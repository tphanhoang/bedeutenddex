import React, { Component, PropTypes } from 'react';
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"
import InputList from "InputList";

export default class PageHome extends Component {

  state = {
    kinds: null,
  };

  fetchKinds(){
    fetchJSON(consts.api.enpoints.getKinds()).then((response) => {
        if(!response.error){
          this.setState({kinds:response.genres})
        }
    });
  };

  componentDidMount() {
      this.fetchKinds();
  };

  render() {

    return (
      <div>
        <InputList title="Kind"
              items={this.state.kinds}
              limit={10} />
      </div>
    )
  }
}
