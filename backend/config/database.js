const mongoose = require("mongoose");

// import * as dotenv from "dotenv";
// dotenv.config();

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb://127.0.0.1:27017/shoppler",
      // process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
