import React, { Component, PropTypes } from 'react';
import {Link, IndexLink} from 'react-router'

export default class PageNotFound extends Component {

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <img src="http://www.kathleenkarlsen.com/wp-content/uploads/2015/06/pikachu.jpg" /><br/>
        <Link to="/" style={{textDecoration: "none", fontWeight: "600"}}><span style={{color: "#000"}}>Back to home !</span></Link>
      </div>
    )
  }
}
