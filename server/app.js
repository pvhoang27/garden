import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import plantRoutes from "./routes/plants.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/garden", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/plants", plantRoutes);

app.get("/", (req, res) => {
  res.send("Garden CMS API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
