const mongoose = require("mongoose");
// const db = process.env.MONGODB_URL;
const db = 'mongodb://127.0.0.1/fairAndSquareDB';
mongoose.set('strictQuery', true);

module.exports = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to MongoDB on %s", db);
    })
    .catch((err) => console.log(err));
};
