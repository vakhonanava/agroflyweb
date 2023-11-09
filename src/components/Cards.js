import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Explore AgroDrone</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/1.png"
              text="The AGRAS T40 is equipped with the revolutionary Coaxial Twin Rotor design, enabling it to carry a spray load of 40 kg[1]and a spread load of 50 kg (70 L)"
              label="Adventure"
              path="/"
            />
            <CardItem
              src="images/2.png"
              text="per hour 21.3 hectare(farmland)"
              label="Farmland"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/3.png"
              text="per hour 4 hectares "
              label="orchards"
              path="/"
            />
            <CardItem
              src="images/4.png"
              text="per hour 1.5 tonnes of fertilizer"
              label="spreading"
              path="/"
            />
            <CardItem
              src="images/5.png"
              text="The system detects land boundaries and obstacles automatically, for quicker planning of flight routes over farmland and hilly orchards."
              label="maping"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
