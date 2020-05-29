import React, { PureComponent } from 'react';
import Card from '../Card/Card';

/* debug */
import sample from '../../static/responses/grid-sample.json';

import './grid-styles.scss';

class Grid extends PureComponent {

  render() {
    console.log('testing sample: ', sample);
    return(
      <div className="grid">
        { sample.data.items.map( (item) => (
          <Card key={`gridCard--${item.product}`} item={item} {...item}/>
        ) ) }
      </div>
    );
  }
}

export default Grid;