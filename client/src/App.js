import React, { Component } from 'react';


class App extends Component {

  state = {
    profile: {"username": "Prueba"}
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
        <h1>IBM Auto Viewer</h1>
      </div>
    )
  }
}

export default App;
