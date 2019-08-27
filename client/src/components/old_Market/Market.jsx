import React, { PureComponent } from 'react';

import Auction from './Auction'

import './style.css';

class Market extends PureComponent {

  state = {
    market: []
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/market/`) // Petición GET
			.then(res => res.json())
			.then(data => {
        console.log(data);
        this.setState({market: data});
      })
  }

  render(){
    return <React.Fragment>
      <h3 className="market-title">Mercado</h3>
      <table className="responsive-table centered striped">
        <thead>
          <tr>
            <th>Nombre / ID</th>
            <th>Fecha</th>
            <th>Posicion</th>
            <th>Edad</th>
            <th>Media</th>
            <th>Puja</th>
            <th></th>
          </tr> 
        </thead>
        <tbody>
          {this.state.market.map(auction =>
            <Auction auction={auction} key={auction._id}/>
          )}
        </tbody>
      </table>
    </React.Fragment>
  }
}

export default Market