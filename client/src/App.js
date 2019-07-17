import React, { Component } from 'react';
import Nav from './components/Menu/Menu';


class App extends Component {

  state = {
    profile: {},
    roster: {}
  }

  componentDidMount() {
		this.fetchProfile();
	}

	fetchProfile() {
		fetch('http://localhost:4000/api/profile') // Petición GET
			.then(res => res.json())
			.then(data => {
					console.log(data);
					this.setState({profile: data});
			})
	}

  render() {
    return (
      <div>
        <Nav
          username={this.state.profile.username}
          teamname={this.state.profile.team_name}
          money={this.state.profile.money}
          color_prim={this.state.profile.color_prim}
          color_sec={this.state.profile.color_sec}
        />
        <h1>IBM Auto Viewer</h1>
      </div>
    )
  }
}

export default App;
