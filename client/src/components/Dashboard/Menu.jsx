import React, { PureComponent } from 'react';

import {TeamInfo, Plantilla, Cantera, Mercado} from './BtnLinks'
import './style.css';


class Menu extends PureComponent {
  render(){
    return(
      <ul className="nav flex-column nav-pills nav-fill">
        <li className="nav-item">
          <TeamInfo />
        </li>
        <li className=" nav-item">
          <Plantilla />
        </li>
        <li className="nav-item">
          <Cantera />
        </li>
        <li className="nav-item">
          <Mercado />
        </li>
      </ul>
    )
  }
}

export default Menu