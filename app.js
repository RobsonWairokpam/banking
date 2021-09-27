const Express = require("express");
const app = Express();
const PORT = 4000;

const AuthRouter = require("./app/auth/router");
const RoleRouter = require("./app/role/router");
///
app.use(Express.json());
app.use("/api/auth", AuthRouter);
app.use("/api/role", RoleRouter);
////
app.listen(PORT, () => {
  console.log("server running on port: ", PORT);
});
