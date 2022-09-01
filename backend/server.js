const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const pistolrouter = require("./pistolsopwithdb");
const redisrouter = require("./pistolopwithredis");
const URL = process.env.URL;
const redis = require("redis");
dotenv.config();

mongoose
  .connect(process.env.URL)
  .then(() => console.log(`Mongo running... at ${process.env.URL}`))
  .catch((err) => console.log(err));
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT | 5000;

app.use("/api/pistols", pistolrouter);
app.use("/redis/", redisrouter);
app.listen(PORT, () => {
  console.log(`Server running... at port ${PORT}`);
});
