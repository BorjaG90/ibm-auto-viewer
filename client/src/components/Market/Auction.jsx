import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'

import './style.css';

class Auction extends PureComponent {
  render(){
    const { auction, key } = this.props;

    var nf = new Intl.NumberFormat('es-ES', 
      { style: 'currency', currency: 'EUR' }
    );

    return <tr key={key}>
      <td>{auction.id_player}</td>
      <td>{
        moment.utc(
          auction.date_auction
        ).format('HH:mm DD-MM-YYYY')}  
        {" / " + moment.utc(auction.date_auction).fromNow()} </td>
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