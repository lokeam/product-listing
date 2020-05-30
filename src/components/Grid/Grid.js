import React from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';

import './grid-styles.scss';

function Grid () {
  const { data, isLoading, isError } = useFetch();

    //console.log('testing sample: ', sample);

    return(
      <div className="grid">
        {isLoading ? <div>loading...</div> : 
          data.map( (item) => (
            <Card key={`gridCard--${item.product}`} item={item} {...item} />
          ))
        }
      </div>
    );
}

export default Grid;
