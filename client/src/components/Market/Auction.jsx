import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class Auction extends PureComponent {
  render(){
    const { auction, key } = this.props;

    var nf = new Intl.NumberFormat('es-ES', 
      { style: 'currency', currency: 'EUR' }
    );

    return <tr key={key}>
      <td>{auction.id_player}</td>
      <td>{auction.date_auction}</td>
      <td>{auction.position}</td>
      <td>{auction.age}</td>
      <td>{auction.average }</td>
      <td>{nf.format(auction.offer)}</td>
    </tr> 
  }
}

// Validation
Auction.propTypes = {
  auction: PropTypes.object.isRequired
}

export default Auction