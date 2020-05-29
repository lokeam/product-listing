import React, { PureComponent } from 'react';
import Card from '../Card/Card';

import './grid-styles.scss';

class Grid extends PureComponent {

  render() {
    return(
      <div className="grid">
        <Card />
      </div>
    );
  }
}

export default Grid;