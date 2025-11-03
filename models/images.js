import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    imageUrl: {
      type: String,
      required: true
    },

    category: {
      type: String,
      enum: [
        "Temple Events",
        "Puja",
        "Festivals",
        "Cultural",
        "Daily Darshan",
        "Prasad",
        "Other"
      ],
      default: "Other"
    },

    featured: {
      type: Boolean,
      default: false
    },

    sortOrder: {
      type: Number,
      default: 0
    },

    isPublished: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.models.Image ||
  mongoose.model("Image", imageSchema);
