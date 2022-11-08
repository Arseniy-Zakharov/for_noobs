const Router = require("express").Router;
const router = Router();

router.get("/user", (req, res) => {
  const { name } = req.query;
  res.status(200).json(name);
});
router.post("/createUser", (req, res) => {
  const { name, password } = req.body;
  res.status(200).json({ name, password });
});

module.exports = router;
