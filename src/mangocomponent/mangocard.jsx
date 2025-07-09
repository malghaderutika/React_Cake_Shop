// src/components/MangoCard.jsx
import React from 'react';
import mangoCard from '../data/mangoCard.json';

const MangoCard = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
      <div className="card" style={{ width: '18rem' }}>
        <img src={mangoCard.img} className="card-img-top" alt={mangoCard.title} />
        <div className="card-body">
          <h5 className="card-title">{mangoCard.title}</h5>
          <p className="card-text">{mangoCard.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default MangoCard;   //display: 'flex' and justifyContent: 'center' it centers the card horizontally

//marginTop: '20px' used for the spacing purpose 