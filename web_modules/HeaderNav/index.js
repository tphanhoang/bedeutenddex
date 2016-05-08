import React, {PropTypes, Component } from 'react'
import {Link, IndexLink} from 'react-router'

import AppBar from 'material-ui/lib/app-bar'
import PokeIcon from 'PokeIcon'


export default class HeaderNav extends Component {
    render() {
        return (
            <div>
              <AppBar
                title="Bedeutenddex"
                iconElementLeft={ <Link to={'/'} >
                    <PokeIcon onClick={this.handleToggle} />
                    </Link>}            
                style={{'background': '#F44336'}}
                />           
            </div>
        )
    }
}
