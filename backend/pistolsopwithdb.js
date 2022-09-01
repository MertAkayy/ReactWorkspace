const pistol = require("./pistol");
const router = require("express").Router();

router.get("/:id", async (req, res) => {
  try {
    const current_pistol = await pistol.findById(req.params.id);
    res.status(200).json(current_pistol._doc);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (_req, res) => {
  try {
    const allpistols = await pistol.find({});

    res.status(200).json(allpistols);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const newpistol = new pistol(req.body);
  try {
    const savedpistol = await newpistol.save();
    res.status(200).json(savedpistol);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  console.log("req.body");
  console.log(req.body);
  try {
    const updatedpistol = await pistol.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedpistol);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await pistol.findByIdAndDelete(req.params.id);
    res.status(200).json(`pistol ${req.params.id} has been deleted.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
