import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    donorName: {
      type: String,
      required: function () {
        return !this.anonymous;
      }
    },
    email: {
      type: String,
      required: function () {
        return !this.anonymous;
      }
    },
    phone: {
      type: String,
      required: true
    },
    message: {
      type: String
    },

    anonymous: {
      type: Boolean,
      default: false
    },
    meals: {
      type: String,
      default: "Custom Meals"
    },
    amount: {
      type: Number,
      required: true,
      min: 1
    },
    sevaType: {
      type: String,
      enum: [
        "Kartavya Seva",
        "Recurring Seva",
        "Festival Seva",
        "Other"
      ],
      default: "Kartavya Seva"
    },

    // payment info
    paymentMethod: {
      type: String,
      enum: ["upi", "bank"],
      required: true
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "successful", "failed", "manual_confirmation_needed"],
      default: "manual_confirmation_needed"
    },


    transactionId: {
      type: String
    },

    screenshotUrl: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.models.Donation ||
  mongoose.model("Donation", donationSchema);
