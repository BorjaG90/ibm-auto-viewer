import React, { PureComponent } from 'react';

import Auction from './Auction'

import './style.css';

class Base extends PureComponent {

  state = { market: [] }

  componentDidMount() {
    fetch(`http://localhost:4000/api/market/pointguard`) // Petición GET
			.then(res => res.json())
			.then(data => {
        console.log(data);
        this.setState({market: data});
      })
  }

  render(){
    return <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Nombre / ID</th>
            <th>Fecha</th>
            <th>Posicion</th>
            <th>Edad</th>
            <th>Media</th>
            <th>Puja</th>
          </tr> 
        </thead>
        <tbody>
          {this.state.market.map(auction =>
            <Auction auction={auction} key={auction._id}/>
          )}
        </tbody>
      </table>
  }
}

export default Base