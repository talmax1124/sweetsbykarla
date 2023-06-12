/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const SocialMediaCarousel = () => {
  return (
    <div className="section-styling">
      <h1 className="section-title">Social Media</h1>
      <iframe
        src="//lightwidget.com/widgets/f52040a369e85aed984ad29702daa41f.html"
        allowtransparency="true"
        className="lightwidget-widget"
        style={{ width: "100%", border: "0", overflow: "hidden" }}
      ></iframe>
    </div>
  );
};

export default SocialMediaCarousel;
