const mongoose = require("mongoose");

mongoose
  .connect(process.env.URL_DB)
  .then((db) => console.log("Db is connected"))
  .catch((e) => console.log("Error:", e));
