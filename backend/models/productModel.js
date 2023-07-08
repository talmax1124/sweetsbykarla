import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    profileImage: { type: String },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productOptionsSchema = mongoose.Schema(
  {
    optionName: { type: String, required: false },
    optionPrice: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    images: [String],
    image2: {
      type: String,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    productVideo: {
      type: String,
    },
    productOptions: [productOptionsSchema],
    productImportantInformation: {
      type: String,
    },
    onSalePrice: {
      type: Number,
      required: false,
      default: 0,
    },
    onSaleBadge: {
      type: Boolean,
      required: false,
      default: false,
    },
    // For the time of days it takes to make the product
    productMakeTime: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
