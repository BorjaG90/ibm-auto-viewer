import React, { PureComponent } from 'react';

import './style.css';

class Profile extends PureComponent {

  state = { player: {} }

  componentDidMount() {
    fetch(`http://localhost:4000/api/players/${this.props.match.params.id}`
    ) // Petición GET
			.then(res => res.json())
			.then(data => {
        console.log(data);
        this.setState({player: data});
      })
      .catch(console.log(`ERROR: ${this.props.match.params.id}`))
  }

  render(){
    const player = this.state.player
    return <div className="responsive-table centered striped">
      {player._id}
    </div>
  }
}

export default Profile