import React, { PureComponent } from 'react';

import './style.css';

class Banner extends PureComponent {
  render(){
    const { username, teamname, money, color_prim, color_sec } = this.props;
    
    var nf = new Intl.NumberFormat('es-ES', 
      { style: 'currency', currency: 'EUR' }
    );

    let navStyle = {
      backgroundColor: color_prim,
      color: "white"
    };
    let titleStyle = {
      backgroundColor: color_sec,
      color: "white"
    };

    return (
      <React.Fragment>

        <nav className="navbar navbar-fixed-top" style={navStyle}>
          <h1><a href="/" style={navStyle}>
            IBM Auto Manager
          </a></h1>
        </nav>

        <nav className="navbar navbar-fixed-top" style={titleStyle}>
          <div></div>
          <div className="navbar-expand-lg navbar-right">
            <a href="#!" style={titleStyle}> {username} </a>
            <a href="#!" style={titleStyle}> {teamname} </a>
            <a href="#!" style={titleStyle}> {nf.format(money)} </a>
          </div>
        </nav>

      </React.Fragment>
    )
  }
}

export default Banner