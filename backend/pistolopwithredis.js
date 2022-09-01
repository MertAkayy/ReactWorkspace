const redis = require("redis");
const router = require("express").Router();

client = redis.createClient({
  socket: {
    host: "2.12.100.148",
    port: 6379,
  },
});
client.on("connect", function () {
  console.log("Connected to Redis!");
});
client.on("error", function (err) {
  console.log("Redis Client Error" + err);
});
router.get("/:connectredis", async (req, res) => {
  try {
    await client.connect();
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/addkeyredis", async (req, res) => {
  console.log("Ad Keyvalue to redis");
  console.log(req.body);
  try {
    client.set(req.body.key, req.body.value);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
