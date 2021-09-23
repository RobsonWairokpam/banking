const Express = require("express");
const app = Express();
const PORT = 4000;

const AuthRouter = require("./app/auth/router");
///

app.use("/api/auth", AuthRouter);

////
app.listen(PORT, () => {
  console.log("server running on port: ", PORT);
});
