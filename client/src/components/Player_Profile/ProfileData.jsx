import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';

class ProfileData extends PureComponent {
  render(){
    const { player } = this.props;
    
    const isJuvenil = player.juvenil ? "Junior" : " Senior"

    var nf = new Intl.NumberFormat('es-ES', 
      { style: 'currency', currency: 'EUR' }
    );

    return <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <h2>{player.name} </h2>
        <h4><b>{player.position}</b> {isJuvenil} - 
          <i> {player.age}</i> años - {player.country}</h4>
        <h4>Características:</h4>
        <p>Altura: <b>{player.heigth / 100}</b> cm. - Peso: 
          <b> {player.weight}</b> Kg.</p>
        <h4>Contrato:</h4>
        <p>Ficha: <b>{nf.format(player.salary)}</b> por año 
          durante {player.years} año/s</p>
        <p>Cláusula: <b>{nf.format(player.clause)}</b> - Cánon: 
          <i> {player.canon / 100}</i>%</p>
      </div>
    </div>
    }
  }
    
  // Validation
  ProfileData.propTypes = { player: PropTypes.object.isRequired }
  
  export default ProfileData