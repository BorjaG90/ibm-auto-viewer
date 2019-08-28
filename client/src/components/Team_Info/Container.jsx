import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';
import Players from './Players';
import {Plantilla, Cantera} from '../Dashboard/Links'

class Container extends PureComponent {
  state = { team_info: [], isLoading: true}

  componentDidMount() {
    fetch(`http://localhost:4000/api/roster/${this.props.team_id}`) // Petición GET
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({team_info: data, isLoading: false});
      this.forceUpdate();
    })
    .catch(console.log(`ERROR: ${this.props.team_id}`))
  }
  
  render(){
    let players_html
    if(this.state.isLoading) {
      console.log("SPINNER Container");
      players_html =
        <React.Fragment>
          <h2><Plantilla/></h2>
          <h2><Cantera/></h2>
        </React.Fragment> // or you can render loading spinner here
    } else {
      console.log("CARGADO Container");
      players_html = <React.Fragment>
        <h2><Plantilla/></h2>
          <Players players={this.state.team_info.seniors}/>
        <h2><Cantera/></h2>
          <Players players={this.state.team_info.juniors}/>
      </React.Fragment> 
    }

    return (
      <div>
        <h1>Resumen del equipo {this.state.team_info.name}</h1>
        {players_html}
      </div>
    )
  }
}

// Validation
Container.propTypes = { team_id: PropTypes.string.isRequired }

export default Container