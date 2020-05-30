import React, { PureComponent } from 'react';
import toaster from "toasted-notes";
import RESTService from '../../services/RESTservice';
import { TEST_ENDPOINT } from '../../constants';

import produceIcon from '../../static/imgs/produce.svg';
import './card-styles.scss';

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this._onCardClick = this._onCardClick.bind(this);
  }

  componentWillUnmount() {
    this._onCardClick = null;
  }
  
  _onCardClick(item) {

    if (!item.soldOut) {
      async function postSelectedItem() {
        const RESTClient = new RESTService();
        const POST_ENDPOINT = `${TEST_ENDPOINT}/${item.id}`;
        try {
          const response = await RESTClient.post(POST_ENDPOINT, item);
          console.log('POST response success: ', response)
          toaster.notify('Thanks! We added your selection to your box!', { duration: 3000 });
        } catch(err) {
          console.log('Error: ', err);
          toaster.notify('Sorry, there was a problem and we couldn\'t add your selection. Please try again later.', { duration: 3000 });
        }
      }
      postSelectedItem();
    } else {
      toaster.notify('Sorry, that item is sold out! Please select another.', { duration: 3000 });
    }

  }

  render() {
    const { item: { msrp, price, product, soldOut } } = this.props;
    const { item } = this.props;

    const productStatus = soldOut ? 'card__status--soldout' : '';
    const pricePlusDecimal = price.toFixed(2);
    const msrpPlusDecimal = msrp.toFixed(2);

    return(
      <div className={`card ${productStatus}`}
          onClick={ () => this._onCardClick(item) }>
        <div className="card__product-msg">
          { soldOut && ( <div className="card__logo--soldout">sold out</div> ) }
        </div>
        <div className="card__thumbnail">
          <img className="card__svg-placeholder" src={produceIcon} alt="placeholder produce icon" />
        </div>
        <div className="card__text">
          <div className="card__heading">{product}</div>
          <div className="card__msrp">MSRP: <span className="card__msrp-dec">{msrpPlusDecimal}</span></div>
          <div className="card__pricelabel">Price: <span className="card__price-dec">{pricePlusDecimal}</span></div>
        </div>
      </div>
    );
  }
}

export default Card;
