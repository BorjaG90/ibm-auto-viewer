import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

export class TeamInfo extends PureComponent {
  render(){ return <Link to="/team_info">Equipo</Link> }
}

export class Plantilla extends PureComponent {
  render(){ return <Link to="/roster">Plantilla</Link> }
}
export class Cantera extends PureComponent {
  render(){ return <Link to="/juniors">Juniors</Link> }
}

export class Mercado extends PureComponent {
  render(){ return <Link to="/market">Mercado</Link> }
}

