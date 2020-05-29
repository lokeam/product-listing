import React, { PureComponent } from 'react';
import produceIcon from '../../static/imgs/produce.svg';
import './card-styles.scss';

class Card extends PureComponent {
  render() {

    return(
      <div className="card">
        <div className="card__product-msg">
          <div className="card__logo--soldout"></div>
        </div>
        <div className="card__thumbnail">
          <img className="card__svg-placeholder" src={produceIcon} alt="placeholder produce icon"/>
        </div>
        <div className="card__text">
          <div className="card__heading">heading here</div>
          <div className="card__msrp">market retail price</div>
          <div className="card__pricelabel">price</div>
        </div>
      </div>
    );
  }
}

export default Card;
