import React, { Component } from 'react';
import {Plantilla, Mercado} from './Links'

class Menu extends Component {
  render(){
    const { color_prim } = this.props;
    let navStyle = {
      backgroundColor: color_prim
    };
    return <nav style={navStyle}>
      <div className="nav-wrapper">
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><Plantilla/></li>
            <li className="tab"><Mercado/></li>
          </ul>
        </div>
      </div>
    </nav>
  }
}

export default Menu