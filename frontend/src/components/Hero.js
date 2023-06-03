/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="-mt-4">
        <div className="hero">
          <div className="hero-intro">
            <div className="hero-intro-content">
              <h1 className="hero-intro-title">
                <span className="hero-intro-title-1 text-black font-bold">
                  Freshly Baked
                </span>
                <br />
                <span className="hero-intro-title-2 font-medium text-slate-600">
                  Everyday
                </span>
              </h1>
              <p>
                From the hand of a professional baker, we provide you the
                high-quality sweets for your sweet tooth.
              </p>
            </div>
          </div>
          <div className="product-info-carousel">
            <div className="product-image-big"></div>
            <div className="product-step-carousel">
              <div className="step-image"></div>
              <div className="step-control">
                <span>
                  <i className="fas fa-chevron-left control-icon-1"></i>
                </span>
                <span>
                  <i className="fas fa-chevron-right control-icon-2"></i>
                </span>
              </div>
              <div className="step-name">
                <div className="flex justify-center mt-auto mb-auto items-center flex-col">
                  <h1>Red Velvet Cake</h1>
                  <p>$ 36.99</p>
                </div>
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
