import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortDesc: String,
  desc: String,
  images: [String],
  video: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

export default mongoose.model("Plant", plantSchema);
