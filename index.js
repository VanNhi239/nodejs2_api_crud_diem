const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const diemRoute = require("./routes/diem");

dotenv.config();

//CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/v1/diem", diemRoute);

app.listen(8000, () => {
  console.log("Server is running...");
});
