import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import Attributes from './Atributes'
import Finances from './Finances'

import './style.css';


class SeniorContainer extends PureComponent {

  state = { team_info: {}, players: [] , isLoading: true}

  componentDidMount() {
    fetch(`http://localhost:4000/api/roster/${this.props.team_id}`) // Petición GET
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(this.props.type)
      this.setState({team_info: data, players: data.seniors, isLoading: false});
      this.forceUpdate();
    })
    .catch(console.log(`ERROR: ${this.props.team_id}`))
  }
  render(){
    let features_html, finances_html
    if(this.state.isLoading) {
      console.log("SPINNER Container");
      features_html =
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      finances_html =
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    } else {
      console.log("CARGADO Container");
      features_html =
        <Attributes players={this.state.players}/>
        finances_html =
        <Finances players={this.state.players}/>
    }
    return ( <React.Fragment>
        <h1>Plantilla Senior de {this.state.team_info.name}</h1>
        <h3>Atributos</h3>
          {features_html}
        <h3>Financiero</h3>
          {finances_html}

      </React.Fragment>
    )
  }
}

// Validation
SeniorContainer.propTypes = { team_id: PropTypes.string.isRequired }

export default SeniorContainer