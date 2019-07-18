import React, { PureComponent } from 'react';
import './style.css';

class Menu extends PureComponent {
  render(){
    const { username, teamname, money, color_prim, color_sec } = this.props;
    let navStyle = {
      backgroundColor: color_prim
    };
    let titleStyle = {
      color: color_sec
    };
    var nf = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });

    return (

      <nav className="nav-extended" style={navStyle}>
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
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><a href="#test1">Test 1</a></li>
            <li className="tab"><a className="active" href="#test2">Test 2</a></li>
            <li className="tab disabled"><a href="#test3">Disabled Tab</a></li>
            <li className="tab"><a href="#test4">Test 4</a></li>
          </ul>
        </div>
      </nav>
  
    )
  }
}

export default Menu