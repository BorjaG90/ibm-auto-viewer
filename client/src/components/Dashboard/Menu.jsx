import React, { Component } from 'react';
import M from 'materialize-css';  

import {Plantilla, Cantera, Mercado} from './Links'

class Menu extends Component {
  componentDidMount() {  
    //let elems = document.querySelectorAll('.dropdown-trigger');
    //M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
    M.AutoInit();
    console.log(M);
  }

  render(){
    const { color_prim } = this.props;
    let navStyle = {
      backgroundColor: color_prim
    };
    return <nav style={navStyle}>
      <div className="nav-wrapper">
        <div className="nav-content">
          <a href="#!" 
            className='dropdown-button dropdown-trigger btn' 
            data-activates='dropdown_roster'
            data-target='dropdown_roster'
          >Entrenador</a>
          <ul id='dropdown_roster' className='dropdown-content'>
            <li><Plantilla/></li>
            <li><Cantera/></li>
            <li className="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>
          <a href="#!" 
            className='dropdown-button dropdown-trigger btn' 
            data-activates='dropdown_market'
            data-target='dropdown_market'
          >Secretario Técnico</a>
          <ul id='dropdown_market' className='dropdown-content'>
            <li><Mercado/></li>
            <li className="divider"></li>
            <li><a href="#!">Jugadores</a></li>
            <li><a href="#!">three</a></li>
          </ul>
        </div>
      </div>
    </nav>
  }
}

export default Menu