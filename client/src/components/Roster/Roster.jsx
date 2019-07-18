import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Player from './Player'

import './style.css';

class Roster extends Component {

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
    if(typeof this.props.team_id !== 'number') {
      console.log("VACÍO");
      return null;
    }else {
      const players = this.state.senior_roster.map(player =>
        <Player
          player={player}
          key={player.id_player}
        />
      )

      return <table>
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
          {players}
        </tbody>
      </table>
      }
  }
}

// Validation
Roster.propTypes = {
  team_id: PropTypes.number.isRequired
}

export default Roster