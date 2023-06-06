import React from "react";

const WhatWeOffer = () => {
  return (
    <>
      <div className="section-styling">
        <h1 className="font-bold section-title">What We Offer</h1>
        <div className="offer-cards-container flex">
          <div className="card1">
            <h2 className="font-bold text-2xl">Cakes</h2>
            <p className="font-medium mb-2 mt-2 text-xl">
              We offer a wide variety of cakes for any occasion. Our cakes are
              made with the finest ingredients and are always fresh.
            </p>
          </div>
          <div className="card2">
            <h2 className="font-bold text-2xl">Pastries</h2>
            <p className="font-medium mb-2 mt-2 text-xl">
              We offer a wide variety of pastries for any occasion. Our pastries
              are made with the finest ingredients and are always fresh.
            </p>
          </div>

          <div className="card3">
            <h2 className="font-bold text-2xl">Bread</h2>
            <p className="font-medium mb-2 mt-2 text-xl">
              We offer a wide variety of bread for any occasion. Our bread is
              made with the finest ingredients and is always fresh.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
