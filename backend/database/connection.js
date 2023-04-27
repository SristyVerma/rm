const mongoose = require('mongoose');
const dotenv = require('dotenv');
 dotenv.config({
    path:'./config/.env'
 })
const DB = process.env.mongoUrl;
console.log("hi",DB)
const connectDatabase = () => {
  mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database connected");
    })
    // .catch((err) => {
    //   console.error("Error connecting to database:", err.message);
    //   process.exit(1);
    // });
};

module.exports = connectDatabase;
