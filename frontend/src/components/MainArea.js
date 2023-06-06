/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// Disable L is not defined
/* eslint-disable no-undef */
import React from "react";

const MainArea = () => {
  return (
    <>
      <div className="main-container">
        <div className="row1">
          <div className="cake-image">
            <img src="https://res.cloudinary.com/dqcstqvkl/image/upload/v1686087439/Screenshot_2023-06-06_at_5.36.37_PM_mwungk.png" />
          </div>
          <div className="cta1">
            <h1>
              View Our Menu <br />& Order Online
            </h1>
            <p className="font-sans font-medium text-xl text-center">
              Traffic is just too much these days. That’s why we are offering a
              digital option to view our menu and order ahead!
            </p>
            <button>View Menu</button>
            <button>Order Online</button>
          </div>
        </div>
        <div className="row2">
          <div className="cta2">
            <h1 className="mb-3">Visit Location</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.1458307787166!2d-81.43776582406149!3d28.263594600738006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd8379041e160d%3A0x7c4914e438a73783!2sSweets%20by%20Karla%20Cakes%20and%20Supplies%20Store!5e0!3m2!1sen!2spr!4v1686092762734!5m2!1sen!2spr"
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
              className="mb-3"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <button>Go To Bakery</button>
          </div>
          <div className="cups-image">
            <img src="https://res.cloudinary.com/dqcstqvkl/image/upload/v1686087449/Screenshot_2023-06-06_at_5.36.58_PM_uk5bib.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainArea;
