// Create a model with the name of the model and the schema and have it to be an array of objects so that each product can have multiple options

import mongoose from "mongoose";

// Option Name and Price

const productOptionsSchema = mongoose.Schema(
  {
    optionName: { type: String, required: false },
    optionPrice: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const productOptionsModel = mongoose.model(
  "ProductOptions",
  productOptionsSchema
);

export default productOptionsModel;

// import mongoose from "mongoose";

// const CategoryOptionSchema = mongoose.Schema({
//   name: { type: String, required: true },
// });

// const IndependentOptionSchema = mongoose.Schema({
//   name: { type: String, required: true },
//   options: [CategoryOptionSchema],
// });

// const productOptionsModel = mongoose.model(
//   "ProductOptions",
//   IndependentOptionSchema
// );

// export default productOptionsModel;
