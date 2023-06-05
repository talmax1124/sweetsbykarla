/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import CarouselImage from "../assets/work.gif";

const Hero = () => {
  return (
    <>
      <div className="-mt-4">
        <div className="hero-alternative">
          <div className="hero-alternative-intro">
            <h1 className="hero-alternative-intro-title-1 text-black font-bold">
              Sweet Bakery
            </h1>
            <h1 className="hero-alternative-intro-title-2 font-extrabold text-[#F1646C]">
              Delights Await<span className="font-bold">.</span>
            </h1>

            <p className="mb-3">
              Get ready to Experience a delectable journey where heavenly
              flavors and irresistible aromas dance together, indulging your
              senses in a symphony of sweetness.
            </p>
            <div>
              <Link
                to="/products"
                className="btn bg-[#7e4f55] text-white w-1/4 hover:bg-[#A06C74] rounded shop-button"
              >
                <i className="fas fa-shopping-bag"></i> Shop Now
              </Link>
              <Link
                to="/contact"
                className="btn contact-button rounded w-1/5 ml-2"
              >
                <i className="fas fa-envelope"></i> Contact Us
              </Link>
            </div>
          </div>
          {/* GIF */}
          <div className="products-gif">
            <img src={CarouselImage} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
