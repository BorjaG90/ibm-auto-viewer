import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Dashboard from './components/Dashboard/Dashboard';
import Banner from './components/Dashboard/Banner'
import Menu from './components/Dashboard/Menu'

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
      console.log("SPINNER App");
      dashboard = <div class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    } else {
      console.log("CARGADO App");
      dashboard = <Dashboard 
        team_id={this.state.profile.team_id._id}
        color_prim={this.state.profile.color_prim}
      />
    }

    return (
      <Router>
        <div className="App">
            <Banner username={this.state.profile.username}
              teamname={this.state.profile.team_name}
              money={this.state.profile.money}
              color_prim={this.state.profile.color_prim}
              color_sec={this.state.profile.color_sec}
            />
            <div className="row full-container">
              <div className="col-md-1"><Menu/></div>
              <div className="col-md-11">
                {dashboard}
              </div>
            </div>
        </div>

      </Router>
    )
  }
}

export default App;
