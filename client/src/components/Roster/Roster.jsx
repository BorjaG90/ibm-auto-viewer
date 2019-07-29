import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import Player from './Player'
import Attributes from './Attributes'

import './style.css';

class Roster extends PureComponent {

  state = {
    senior_roster: []
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/roster/`, 
      {headers:{'team_id': this.props.team_id}}
    ) // Petición GET
			.then(res => res.json())
			.then(data => {
        console.log(data);
        this.setState({senior_roster: data});
      })
      .catch(console.log(`ERROR: ${this.props.team_id}`))
  }

  render(){
    return <div className="responsive-table centered striped">
      <div className="row">
        <table>
          <tr>
            <th>Nombre</th>
            <th>Pos.</th>
            <th>Edad</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>Ficha</th>
            <th>Años C.</th>
            <th>Cláusula</th>
            <th>Canon</th>
            <th>País</th>
          </tr>

      {this.state.senior_roster.map(player => 
        <React.Fragment>
          <Player player={player} key={player.id_player} />
          <Attributes player={player} key={player.id_player} />
        </React.Fragment>
      )}
      </table>
      </div>
    </div>
  }
}

// Validation
Roster.propTypes = {
  team_id: PropTypes.number.isRequired
}

export default Roster