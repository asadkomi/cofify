import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true," Please enter product name"],
      maxLength: [100, "Product name can not exceed 100 characters"],
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Please enter product description"],
      maxLength: [700, "Product description can not exceed 700 characters"],
    },
    img: [{
        public_id: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: false,
        }
    }],
    prices: {
      type: [Number],
      required: [true, "Please enter product prices"],
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },
        name: {
            type: String,
            required: true,
        }
        ,
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        }
    }]
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);