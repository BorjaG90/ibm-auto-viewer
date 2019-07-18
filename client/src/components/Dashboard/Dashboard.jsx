import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'


import Menu from './Menu';
import Roster from '../Roster/Roster'

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



        </Switch>
      </div>
    )
  }
}

export default Dashboard