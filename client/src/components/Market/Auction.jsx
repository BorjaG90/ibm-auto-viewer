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

    let identificator;
    if (auction.player !== null){
      identificator = auction.player.name
    } else {
      identificator = auction._id
    }

    return <tr key={key}>
      <td>{identificator}</td>
      <td>{
        moment.utc(
          auction.date_auction
        ).format('HH:mm DD-MM-YYYY')}  
        {" / " + moment.utc(auction.date_auction).fromNow()
          .replace("in ","en ")
          .replace(" hour"," hora")
          .replace(" a", " un")
          .replace(" day", " día")} 
        </td>
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