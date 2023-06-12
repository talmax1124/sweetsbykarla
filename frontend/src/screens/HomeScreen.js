/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import Hero from "../components/Hero";
import TopProducts from "../components/TopProducts";
import OurStory from "../components/OurStory";
import WhatWeOffer from "../components/WhatWeOffer";
import MainArea from "../components/MainArea";
import ReviewComponent from "../components/ReviewComponent";
import SocialMediaCarousel from "../components/SocialMediaCarousel";

const HomeScreen = ({ match, history, location }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      <Hero />
      <main className="py-3">
        {!keyword && pageNumber === 1 ? (
          <>
            <OurStory />
            <WhatWeOffer />
            <MainArea />
            <TopProducts />
            <ReviewComponent />
            <SocialMediaCarousel />
          </>
        ) : (
          <Link
            to="/"
            className="btn bg-black w-full text-white hover:bg-gray-700"
          >
            Go Back
          </Link>
        )}
        {/* {!keyword && pageNumber === 1 ? (
          <>

          </>
        ) : (
          <></>
        )} */}
      </main>
    </>
  );
};

export default HomeScreen;
