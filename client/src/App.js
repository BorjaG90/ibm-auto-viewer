import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import M from 'materialize-css';  

import Menu from './components/Dashboard/Menu'
import Banner from './components/Dashboard/Banner';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';


class App extends Component {

  state = {
    profile: {},
    isLoading: true
  }

  componentDidMount() {
    M.AutoInit();
    //console.log(M);
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
        <Banner 
          username={this.state.profile.username}
          teamname={this.state.profile.team_name}
          money={this.state.profile.money}
          color_prim={this.state.profile.color_prim}
          color_sec={this.state.profile.color_sec}
        />

        <Menu color_prim={this.state.profile.color_prim} />

        <div className="App">
          {dashboard}
        </div>

      </Router>
    )
  }
}

export default App;
