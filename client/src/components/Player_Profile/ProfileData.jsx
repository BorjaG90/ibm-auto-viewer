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

    return <div className="card">

      <div className="card-header">
        <h2 className="card-title">{player.name} </h2>
      </div>

      <div className="card-body">
        <div className="row">
          <div className="info col-md-12">
            <table className="table table-borderless">
              <thead className="thead-dark">
                <tr> <th colSpan="2">Info</th> </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Posición</th>
                  <td>{player.position}</td>
                </tr>
                <tr>
                  <th scope="row">Plantilla</th>
                  <td>{isJuvenil}</td>
                </tr>
                <tr>
                  <th scope="row">Edad</th>
                  <td>{player.age}</td>
                </tr>
                <tr>
                  <th scope="row">País</th>
                  <td>{player.country}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="row">
          <div className="features col-md-6">
            <table className="table table-borderless">
              <thead className="thead-dark">
                <tr> <th colSpan="2">Características</th> </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Altura</th>
                  <td>{player.heigth / 100} cm.</td>
                </tr>
                <tr>
                  <th scope="row">Peso</th>
                  <td>{player.weight / 100} Kg.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="contract col-md-6">
            <table className="table table-borderless">
              <thead className="thead-dark">
                <tr> <th colSpan="2">Contrato</th> </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Ficha</th>
                  <td>{nf.format(player.salary)}</td>
                </tr>
                <tr>
                  <th scope="row">Años</th>
                  <td>{player.years} año/s</td>
                </tr>
                <tr>
                  <th scope="row">Cláusula</th>
                  <td>{nf.format(player.clause)}</td>
                </tr>
                <tr>
                  <th scope="row">Cánon</th>
                  <td>{player.canon / 100}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
    }
  }
    
  // Validation
  ProfileData.propTypes = { player: PropTypes.object.isRequired }
  
  export default ProfileData