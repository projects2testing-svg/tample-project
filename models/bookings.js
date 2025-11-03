import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookingType: {
      type: String,
      enum: ["accommodation", "puja"],
      required: true
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    checkIn: { type: Date },
    checkOut: { type: Date },
    guests: { type: Number, default: 1 },
    roomType: {
      type: String,
      enum: ["standard", "deluxe", "premium", "dormitory"],
      default: "standard"
    },

    pujaType: {
      type: String,
      enum: ["ganesh", "laxmi", "satyanaarayan", "havan", "special", ""]
    },
    pujaDate: { type: Date },
    specialRequests: { type: String },

    status: {
      type: String,
      enum: ["pending", "confirmed", "rejected"],
      default: "pending"
    }
  },
  { timestamps: true }
);

export default mongoose.models.Booking ||
  mongoose.model("Booking", bookingSchema);
