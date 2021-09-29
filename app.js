const Express = require("express");
const app = Express();
const PORT = 4000;
const AuthRouter = require("./app/auth/router");
const UserRouter = require("./app/user/router");
const RoleRouter = require("./app/role/router");
const BranchRouter = require("./app/branch/router");
app.use(Express.json());
app.use("/api/auth", AuthRouter);
app.use("/api/user", UserRouter);
app.use("/api/role", RoleRouter);
app.use("/api/branch", BranchRouter);
app.listen(PORT, () => {
  console.log("server running on port: ", PORT);
});
