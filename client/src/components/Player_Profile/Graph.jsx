import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Radar } from 'react-chartjs-2';

import './style.css';

class Graph extends Component {
  render(){
    const { data, options } = this.props;

    return <div className="card">
      <div className="card-body">
        <Radar data={data} options={options}/>
      </div>
    </div>
  }
}

  // Validation
  Graph.propTypes = { data: PropTypes.object.isRequired }

export default Graph