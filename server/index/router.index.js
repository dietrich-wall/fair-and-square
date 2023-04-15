const router = require("express").Router();
const data = require("../data");

router
  .route("/")

  .get(function (req, res) {
    res.json(data);
  })

  .post(function (req, res) {
    console.log(req.body)
    res.json(req.body);
  });

module.exports = router;
