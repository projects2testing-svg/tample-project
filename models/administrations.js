import mongoose from "mongoose";

const adminTeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["Admin", "Committee", "Priest", "Volunteer", "Other"],
      default: "Admin"
    },

    img: {
      type: String,
      required: true
    },

    email: {
      type: String
    },

    whatsapp: {
      type: String
    },

    priority: {
      type: Number,
      default: 0
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.models.AdminTeam ||
  mongoose.model("AdminTeam", adminTeamSchema);
