import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String
    },
    
    videoUrl: {
      type: String,
      required: true
    },
    thumbnailUrl: {
      type: String
    },
    category: {
      type: String,
      enum: [
        "Temple Events",
        "Puja",
        "Festivals",
        "Cultural",
        "Bhajans",
        "Announcements",
        "Other"
      ],
      default: "Other"
    },

    isPublished: {
      type: Boolean,
      default: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    sortOrder: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export default mongoose.models.Video ||
  mongoose.model("Video", videoSchema);
