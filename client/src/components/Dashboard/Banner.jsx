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
      <React.Fragment>

        <nav className="navbar bg-dark navbar-fixed-top" style={navStyle}>
          <h1><a href="/" className="" style={titleStyle}>
            IBM Auto Manager
          </a></h1>
        </nav>

        <nav className="navbar bg-dark navbar-fixed-top">
          <div class="navbar-expand-lg navbar-right" id="navbarSupportedContent">
            <a href="#!"> {username} </a>
            <a href="#!"> {teamname} </a>
            <a href="#!"> {nf.format(money)} </a>
          </div>
        </nav>

      </React.Fragment>
    )
  }
}

export default Banner