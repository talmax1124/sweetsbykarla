import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        digitalLink: { type: String },

        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    orderEstimatedCompletionDate: { type: String, required: false },

    orderNotes: {
      notes: { type: String },
    },

    digitalLink: {
      type: String,
    },

    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },

    isPacked: {
      type: Boolean,
      required: true,
      default: false,
    },
    isDispatched: {
      type: Boolean,
      required: true,
      default: false,
    },

    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    orderEstimatedCompletionDate: {
      type: String,
      required: false,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    cdnURL: {
      type: String,
    },
    emailNotifier: {
      type: String,
    },
    orderStatus: {
      type: String,
    },

    countInStock: { type: Number },

    packedAt: {
      type: String,
      type: Date,
    },

    emailNotifier: {
      dispatchedAt: {
        type: String,
        type: Date,
      },
    },

    isCancelled: {
      type: Boolean,
      default: false,
    },
    orderStatus: {
      type: String,
      cancelledAt: {
        type: Date,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
