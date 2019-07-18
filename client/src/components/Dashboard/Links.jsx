import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

export class Plantilla extends PureComponent {
  render(){
    return (<Link to="/roster">Plantilla</Link>)
  }
}

export class Mercado extends PureComponent {
  render(){
    return (<Link to="/market">Mercado</Link>)
  }
}
