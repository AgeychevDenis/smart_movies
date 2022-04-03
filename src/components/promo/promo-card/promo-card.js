import './promo-card.scss';
import PromoIcon from '../../../assets/img/icon/sort.svg';
import KinopoiskService from '../../../services/kinopoisk-server';
import { Component } from 'react';

class PromoCard extends Component {
   constructor(props) {
      super(props);
      this.updateChar();
   }

   state = {
      char: {}
   }

   kinopoiskService = new KinopoiskService();

   onChatLoaded = (char) => {
      this.setState({ char })
   }

   updateChar = () => {
      const id = 1100777
      this.kinopoiskService
         .getCharacter(id)
         .then(this.onChatLoaded)
   }

   render() {
      const { char: { imageUrl, rating, year, country, time, title, genre } } = this.state;

      return (
         <a className="promo__card">
            <div className="promo__card-img">
               <img src={imageUrl} alt="promo" />
            </div>
            <div className="promo__content">
               <p className="promo__content-rating">{rating}<img src={PromoIcon} alt="sort" />
                  <span className="name-rating">кинопоиск</span>
               </p>
               <p className="promo__content-year">{year}</p>
               <p className="promo__content-country">{country}</p>
               <p className="promo__content-time">{time} минут</p>
            </div>
            <h4 className="promo__wrapper-title">{title}</h4>
            <p className="promo__wrapper-subtitle">{genre}</p>
         </a>
      )
   }
}

export default PromoCard;