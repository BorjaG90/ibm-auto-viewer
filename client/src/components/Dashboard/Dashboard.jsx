import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'


class Dashboard extends Component {
  componentDidMount() {
    this.forceUpdate()
    console.log(this.props.team_id)
  }
  
  render(){
    return(
      <div className="dashboard">
        <Switch>

          Roster

        </Switch>
      </div>
    )
  }
}

export default Dashboard