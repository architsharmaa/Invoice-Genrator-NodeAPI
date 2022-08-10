const express = require("express");
const { append } = require("express/lib/response");

const app = express();

const PORT = 4000;

//importing route middleware
const routes = require("./routes/routes");

app.listen(PORT, () => {
  console.log("Server up at " + PORT);
});

app.use("/", routes);
