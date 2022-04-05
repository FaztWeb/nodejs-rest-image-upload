import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    image: {
      secure_url: String,
      public_id: String
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
