import React from 'react';
import ReactDOM from 'react-dom';

class SpaceShip extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.colors}</p>
      </div>
    );
  }
}


SpaceShip.defaultProps = {
  name: 'Stranger',
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default SpaceShip;
