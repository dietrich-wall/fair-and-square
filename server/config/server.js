////////////////////////////////////
// import librarys and modules
////////////////////////////////////

// nodejs library
const express = require("express");
// General purpose middleware
const path = require("path");
const cors = require('cors');
// import routes
const indexRouter = require("../index/router.index");
// const itemRouter = require("../resources/event/router.item");
const userRouter = require("../resources/user/router.user");

const app = express();

app.use(cors());

app.disable("x-powered-by");

// parse URL-encoded/JSON body-params and attach to reqest object
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Require static assets from public folder
// app.use(express.static(path.join(__dirname, "../../frontend/public")));

// setup routes
app.use("/", indexRouter);
// app.use("/event", itemRouter);
app.use("/user", userRouter);

module.exports = app;
