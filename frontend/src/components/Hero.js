/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero -mt-4">
        <h1 className="font-medium font-sans">
          Experience The Magic Of Freshly Baked Goods
        </h1>
        <Link to="/products">
          <button className="px-3 py-2 bg-pink-300 rounded-md mt-3">
            View Items
          </button>
        </Link>
      </div>
    </>
  );
};

export default Hero;
