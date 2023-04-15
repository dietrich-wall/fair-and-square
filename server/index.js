//connect to DB
require("./config/db")();

// setup server
const app = require("./config/server");

// listen to Server requests at provided Port
// const { PORT, HOST_URL } = process.env;
const PORT = 8080;
const HOST_URL = "https://localhost:8080/";
app.listen(PORT, () => {
  console.log(`Server started on ${HOST_URL}`);
});
