/* enable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */

import React from "react";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { listProductDetails } from "../../actions/productActions";

const MultiSelect = ({ match, product }) => {
  //   const [selected, setSelected] = useState([]);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     console.log(selected);
  //     if (!product._id || product._id !== match.params.id) {
  //       dispatch(listProductDetails(match.params.id));
  //     }
  //   }, [dispatch, match, product, selected]);

  return (
    // {/* Map product.productOptions and display the options */}

    <div>
      {/* <select
        onChange={(e) => {
          setSelected([...selected, e.target.value]);
        }}
      >
        <option value="">Select</option>
        {product.productOptions.map((option) => (
          <option key={product} value={option}>
            {product.option}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default MultiSelect;
