import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'


import Menu from './Menu';
import Roster from '../Roster/Roster'
import Market from '../Market/Market';

class Dashboard extends Component {
  componentDidMount() {
    this.forceUpdate()
  }
  
  render(){
    return(
      <div className="dashboard">
        <Menu color_prim={this.props.color_prim} />
        <Switch>

          <Route path="/roster" render={props => 
            <Roster {...props} team_id={this.props.team_id} />
          }/>

          <Route path="/market" render={props => 
            <Market />
          }/>

        </Switch>
      </div>
    )
  }
}

export default Dashboard