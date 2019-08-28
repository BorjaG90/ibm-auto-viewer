import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

export class TeamInfo extends PureComponent {
  render(){ 
    return <Link to="/team_info">
      <button className="btn btn-block btn-dark">
        Equipo
      </button>
    </Link> 
  }
}

export class Plantilla extends PureComponent {
  render(){
    return <Link to="/roster">
      <button className="btn btn-block btn-dark">
        Plantilla
      </button>
    </Link>
  }
}
export class Cantera extends PureComponent {
  render(){
    return <Link to="/juniors">
      <button className="btn btn-block btn-dark">
        Juniors
      </button>
    </Link>
  }
}

export class Mercado extends PureComponent {
  render(){
    return <Link to="/market">
      <button className="btn btn-block btn-dark">
        Mercado
      </button>
    </Link>
  }
}

