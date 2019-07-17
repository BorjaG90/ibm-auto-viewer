import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Menu from './components/Menu/Menu';
import Roster from './components/Roster/Roster';


class App extends Component {

  state = {
    profile: {}
  }

  componentWillMount() {
    this.fetchProfile();
  }
  
	fetchProfile() {
		fetch('http://localhost:4000/api/profile') // Petición GET
			.then(res => res.json())
			.then(data => {
        this.setState({profile: data});
      })
  }

  render() {
    return (
      <div className="container">
        <Menu
          username={this.state.profile.username}
          teamname={this.state.profile.team_name}
          money={this.state.profile.money}
          color_prim={this.state.profile.color_prim}
          color_sec={this.state.profile.color_sec}
        />
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
            <Roster id_team={this.state.profile.id_team} />
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
