import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords, thumbnail }) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta property="og:url" content="https://sweetsbykarla.net" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sweets By Karla" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={thumbnail} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Sweets By Karla ",
  description: "Custom handmade sweets and treats",
  keywords: "sweets, treats, custom, handmade, desserts, cakes, cupcakes",
  thumbnail:
    "https://i.ibb.co/ZWCDGDn/276994740-364035949063863-3355795617466728307-n.jpg",
};

export default Meta;
