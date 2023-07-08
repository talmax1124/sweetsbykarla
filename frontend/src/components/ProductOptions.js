import React, { useState } from "react";

const ProductOptions = ({ onOptions, options }) => {
  const [optionName, setOptionName] = useState("");
  const [optionPrice, setOptionPrice] = useState("");

  const optionHandler = (e) => {
    e.preventDefault();
    if (optionName && optionPrice) {
      onOptions([...options, `${optionName} - $${optionPrice}`]);
      setOptionName("");
      setOptionPrice("");
    }
  };

  // Use the productOptions model and schema which uses an array of objects which have the name and price

  const removeOption = (e) => {
    e.preventDefault();
    const newOptions = options.filter(
      (option) => option !== e.target.innerText
    );
    onOptions(newOptions);
  };

  return (
    <div>
      <h4>Product Optoins</h4>

      <div className="action mb-2 flex justify-between">
        <input
          type="text"
          placeholder="Option Name"
          value={optionName}
          onChange={(e) => setOptionName(e.target.value)}
          className="p-3 w-1/2 mr-2"
        />
        <input
          type="number"
          placeholder="Option Price"
          value={optionPrice}
          onChange={(e) => setOptionPrice(e.target.value)}
          className="p-3 w-1/2"
        />
        <br />
        <button onClick={optionHandler} className="p-3 bg-slate-300">
          Add Option
        </button>
      </div>
      {/* Map over the options which include name and price */}
      {/* {options.map((option, index) => (
        <div key={index} className="flex justify-between mb-2">
          <p>{option}</p>
          <button onClick={removeOption} className="p-3 bg-slate-300">
            Remove
          </button>
        </div>
      ))} */}
    </div>
  );
};

export default ProductOptions;
