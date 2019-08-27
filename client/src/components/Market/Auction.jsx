import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'
import { Link } from 'react-router-dom'

import './style.css';

class Auction extends PureComponent {
  render(){
    const { auction } = this.props;

    var nf = new Intl.NumberFormat('es-ES', 
      { style: 'currency', currency: 'EUR' }
    );

    let nombre;
    nombre = auction.player !== null ? auction.player.name : auction._id
    let identificador;
    identificador = auction.player !== null ? <Link to={`/players/${auction.player._id}`}>
    <button className="btn waves-effect waves-ligh purple lighten-2">
      Perfil
    </button>
  </Link> : null

    return <tr>
      <td>{nombre}</td>
      <td>{
        moment.utc(
          auction.date_auction
        ).format('HH:mm DD-MM-YYYY')}  
        {" / " + moment.utc(auction.date_auction).fromNow()
          .replace(" ago", " antes")
          .replace("in ","en ")
          .replace(" hour"," hora")
          .replace(" an ", " una ")
          .replace(" a ", " un ")
          .replace(" day", " día")
        } 
        </td>
      <td>{auction.position}</td>
      <td>{auction.age}</td>
      <td>{auction.average }</td>
      <td>{nf.format(auction.offer)}</td>
      <td>{identificador}</td>
    </tr> 
  }
}

// Validation
Auction.propTypes = { auction: PropTypes.object.isRequired }

export default Auction