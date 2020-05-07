const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const apiRoute = require("./routes/api");

app.use(express.json());

app.use("/api", apiRoute);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-z8ytg.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to the database.");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening...");
});
