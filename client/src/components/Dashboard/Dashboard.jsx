import React, { PureComponent } from 'react';

import Roster from '../Roster/Roster'

import './style.css';

class Dashboard extends PureComponent {

  render(){
    
    return <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>País</th>
            <th>Nombre</th>
            <th>Pos.</th>
            <th>Edad</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>Ficha</th>
            <th>Años C.</th>
            <th>Cláusula</th>
            <th>Canon</th>
          </tr> 
        </thead>
        <tbody>
          <Roster 
            id_tema={this.props.id_team}
          />
        </tbody>
      </table> 
    </div>
  }
}

// Validation
Dashboard.propTypes = {
  id_team: PropTypes.id_team.isRequired
}

export default Dashboard