import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import './style.css';
import Players from './Players';
import {Plantilla, Cantera} from '../Dashboard/Links'

class Container extends PureComponent {
  state = { team_info: {}, isLoading: true}

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
          <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <h2><Cantera/></h2>
          <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </React.Fragment>
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
      <React.Fragment>
        <h1>Resumen del equipo {this.state.team_info.name}</h1>
        <h3>
          División:{this.state.team_info.division} / Grupo: 
          {this.state.team_info.group} - Clasificación: 
          {this.state.team_info.clasification} - Racha: 
          {this.state.team_info.streak}
        </h3>
        {players_html}
      </React.Fragment>
    )
  }
}

// Validation
Container.propTypes = { team_id: PropTypes.string.isRequired }

export default Container