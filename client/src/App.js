import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Menu from './components/Menu/Menu';
import Roster from './components/Roster/Roster';


class App extends Component {

  state = {
    profile: {},
    isLoading: true
  }

  componentDidMount() {
    this.fetchProfile();
  }
  
	fetchProfile() {
		fetch('http://localhost:4000/api/profile') // Petición GET
			.then(res => res.json())
			.then(data => {
        this.setState({
          profile: data,
          isLoading: false});
      })
  }

  render() {
    let roster_grid
    if(this.state.isLoading) {
      console.log("SPINNER");
      roster_grid = null // or you can render laoding spinner here
    } else {
      console.log("CARGADO");
      roster_grid = <Roster team_id={this.state.profile.id_team} />
    }

    return (
      <div className="container">
        <Router>
          <Route exact path="/" render={() => {
            return <div>
              <Menu
                username={this.state.profile.username}
                teamname={this.state.profile.team_name}
                money={this.state.profile.money}
                color_prim={this.state.profile.color_prim}
                color_sec={this.state.profile.color_sec}
              />
              {roster_grid}
            </div>
          }}></Route>
        </Router>
        
      </div>
    )
  }
}

export default App;
