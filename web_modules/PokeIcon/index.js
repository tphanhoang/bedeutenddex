import React, { Component } from 'react';
import SvgIcon from 'material-ui/lib/svg-icon';

const PokeIcon = () => (
  <SvgIcon style={{marginTop:"11px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="27 27 45 45">
    <path d="M 30 50
        a 1 1 1 0 1 40 0
        h-12.5
        a 1 1 1 0 0 -15 0
        z"
        fill="#222" stroke="#222"
    ></path>
    <circle
        cx="50"
        cy="50"
        r="5"
        fill="#fff" stroke="#fff"
    ></circle>
    <path d="M 30 50
        a 1 1 1 0 0 40 0
        h-12.5
        a 1 1 1 0 1 -15 0
        z"
        fill="#fff" stroke="#fff"
    ></path>
	</svg>
  </SvgIcon>
)

export default PokeIcon