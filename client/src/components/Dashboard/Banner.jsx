import React, { PureComponent } from 'react';

import './style.css';

class Banner extends PureComponent {
  render(){
    const { username, teamname, money, color_prim, color_sec } = this.props;
    
    var nf = new Intl.NumberFormat('es-ES', 
      { style: 'currency', currency: 'EUR' }
    );

    let navStyle = {
      backgroundColor: color_prim
    };
    let titleStyle = {
      color: color_sec
    };

    return (
      <nav style={navStyle}>
        <div className="nav-wrapper">

          <a href="/" className="center brand-logo" style={titleStyle}>
            IBM Auto Manager
          </a>

          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="info">{username}</li>
            <li className="info info-team" style={titleStyle}>{teamname}</li>
            <li className="info">{nf.format(money)}</li>
          </ul>
        </div>
      </nav>
  
    )
  }
}

export default Banner