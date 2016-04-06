import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"
import InputList from "InputList";

import { get as getArtists } from "app/reducers/artists"

import styles from "./index.css";

@connect(
    (state) => ({
        artists : state.artists
    }),
    (dispatch) => ({
        getArtists : (value) => dispatch(getArtists(value)),
    })
)
export default class InputArtist extends Component {

  static contextTypes = {
      router: PropTypes.object,
  };

  static propTypes = {
      artists : PropTypes.object,
      getArtists : PropTypes.func,
  };

  static defaultProps = {
      artists : {},
      getArtists : () => {}
  };

  onInputArtistChange = (value) => {
      this.props.getArtists(value)
  };

  selectArtist = (item) => {
      this.context.router.push(`/artist/${item.id}`)
  };

  render() {
    return (
      <div className={styles.input}>
        <InputList title="Search Artists"
              onItemClick={this.selectArtist}
              items={this.props.artists.results}
              autoFilter={true}
              onInputChange={this.onInputArtistChange} />
      </div>
    )
  }
}
