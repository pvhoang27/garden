import authRoutes from "./routes/auth.js";
app.use("/api/auth", authRoutes);
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import plantRoutes from "./routes/plants.js";
import categoryRoutes from "./routes/categories.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/garden", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/plants", plantRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Garden CMS API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
