const router = require("express").Router();
// // DB manipulation functions
const EventController = require("./controller.event");

const data = require("../../data");

router
  .route("/")

  .get(async function (req, res) {
    console.log("hi mom! ")
  })

  .post(async function (req, res) {
    const doc = await EventController.addUser(req);
    res.json(doc)
    // data.user = req.body.name;
    // res.redirect("back")
  });



module.exports = router;
