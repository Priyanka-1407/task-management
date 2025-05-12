const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const taskRoutes = require("./routes/tasks");
app.use("/api/tasks", taskRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server started on 5000")))
  .catch(err => console.error(err));
