// PricingCard.js

import React from 'react';
import '../Styles/pricingcard.css';

const PricingCard = ({ plan, price, features, onSelect, selected }) => {
  return (
    <div className={`pricing-card ${selected ? 'selected' : ''}`} onClick={() => onSelect(plan)}>
      <h3>{plan} Plan</h3>
      <p>{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
