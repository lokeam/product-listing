import React from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';

import './grid-styles.scss';

function Grid () {
  const { data, isLoading, isError } = useFetch();

    //console.log('testing sample: ', sample);

    return(
      <div className="grid">
        { isError && <div>Something went wrong. Sorry about that. Please try again in a few minutes.</div> }

        {isLoading ? <Spinner /> : 
          data.map( (item) => (
            <Card key={`gridCard--${item.product}`} item={item} {...item} />
          ))
        }
      </div>
    );
}

export default Grid;
