/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const OurStory = () => {
  return (
    <>
      <div className="story section-styling flex flex-col lg:flex-row">
        <img
          src="https://res.cloudinary.com/dqcstqvkl/image/upload/v1686086965/Screenshot_2023-06-06_at_5.22.19_PM_blwebs.png"
          alt="store"
          className="rounded-md lg:w-1/6 hidden lg:block "
        />
        <img
          src="https://i.ibb.co/tzP6mSx/Screenshot-2023-06-06-at-5-17-35-PM.png"
          alt="store2"
          className="rounded-md w-full  lg:hidden"
        />

        <div className="ml-3 flex flex-col ">
          <h1 className="font-bold title">Just a bit about us...</h1>
          <p className="font-medium mb-2 mt-2 text-xl">
            Our bakery is a small, family-owned business that has been serving
            the Kissimmee community for over 20 years. We are passionate about
            baking delicious, fresh-made pastries and desserts that our
            customers love.
          </p>
          <p className="font-medium mb-2 mt-2 text-xl">
            We use only the finest ingredients and traditional baking methods to
            create our pastries. We believe that baking is an art form, and we
            take great pride in our work.
          </p>
          <p className="font-medium mb-2 mt-2 text-xl">
            We are committed to providing our customers with the best possible
            experience. We offer friendly and attentive service, and we are
            always willing to go the extra mile to make sure our customers are
            satisfied. We are located in the heart of Kissimmee, and we are open
            seven days a week. We hope to see you soon!
          </p>
          <img
            src="https://images.getbento.com/accounts/a0e834cb8df765b9862ad99cdc1971cf/media/images/Little-Tart_rolling-pin.gif?w=1000&fit=max&auto=compress,format&h=1000"
            alt="rolling-tart-gif"
            className="w-1/12"
          />
        </div>
      </div>
    </>
  );
};

export default OurStory;
