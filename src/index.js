const app = require("./app.js");
require("./database");

app.listen(process.env.PORT, () => {
  console.log("Server running...");
});
