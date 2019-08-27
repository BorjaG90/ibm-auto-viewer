import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Dashboard from './components/Dashboard/Dashboard';
import Banner from './components/Dashboard/Banner'

import './App.css';


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
    let dashboard
    if(this.state.isLoading) {
      console.log("SPINNER");
      dashboard = null // or you can render loading spinner here
    } else {
      console.log("CARGADO");
      dashboard = <Dashboard 
        team_id={this.state.profile.team_id}
        color_prim={this.state.profile.color_prim}
      />
    }

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Banner username={this.state.profile.username}
              teamname={this.state.profile.team_name}
              money={this.state.profile.money}
              color_prim={this.state.profile.color_prim}
              color_sec={this.state.profile.color_sec}
            />
            <div className="row">
              <div className="col-md-2">Menu</div>
              <div className="col-md-10">
                {dashboard}
              </div>
            </div>
          </div>
        </div>

      </Router>
    )
  }
}

export default App;
