const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

mongoose.connect(
  "mongodb+srv://gaurimadaan12:abc@cluster0.l4zcspn.mongodb.net/test"
);

const db = mongoose.connection;
db.on("error", (error) => console.log("MongoDb connection errror ", error));
db.once("open", () => console.log("Connected to database"));

app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log("server is listening to ${PORT}");
});