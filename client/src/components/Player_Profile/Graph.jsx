import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Radar } from 'react-chartjs-2';

import './style.css';

class Graph extends Component {
  render(){
    const { data, options } = this.props;

    return <div className="card blue lighten-4">
      <div className="card-content">
        <Radar data={data} options={options}/>
        <h4 className="profile-card-title">Media del jugador</h4>
      </div>
    </div>
  }
}

  // Validation
  Graph.propTypes = { data: PropTypes.object.isRequired }

export default Graph