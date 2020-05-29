import React, { PureComponent } from 'react';
import produceIcon from '../../static/imgs/produce.svg';
import './card-styles.scss';

class Card extends PureComponent {
  render() {

    const { item: { msrp, price, product, soldOut } } = this.props;
    const { item } = this.props;

    const productStatus = soldOut ? 'card__status--soldout' : '';
    const pricePlusDecimal = price.toFixed(2);
    const msrpPlusDecimal = msrp.toFixed(2);

    console.log("Card, testing item: ", item);
    return(
      <div className={`card ${productStatus}`}>
        <div className="card__product-msg">
          { soldOut && ( <div className="card__logo--soldout">sold out</div> ) }
        </div>
        <div className="card__thumbnail">
          <img className="card__svg-placeholder" src={produceIcon} alt="placeholder produce icon" />
        </div>
        <div className="card__text">
          <div className="card__heading">{product}</div>
          <div className="card__msrp">MSRP: <span className="card__msrp-dec">{msrpPlusDecimal}</span></div>
          <div className="card__pricelabel">Price: <span className="card__msrp-dec">{pricePlusDecimal}</span></div>
        </div>
      </div>
    );
  }
}

export default Card;
