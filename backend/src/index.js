const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log("Server is on", process.env.PORT);
});
