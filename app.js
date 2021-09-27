const Express = require("express");
const app = Express();
const PORT = 4000;

const AuthRouter = require("./app/auth/router");
<<<<<<< HEAD
const UserRouter = require("./app/user/router");
=======
const RoleRouter = require("./app/role/router");
>>>>>>> 323b18db48bdb225746c6f282034b2b0f0a0aea1
///
app.use(Express.json());
app.use("/api/auth", AuthRouter);
<<<<<<< HEAD
app.use("/api/user", UserRouter);

=======
app.use("/api/role", RoleRouter);
>>>>>>> 323b18db48bdb225746c6f282034b2b0f0a0aea1
////
app.listen(PORT, () => {
  console.log("server running on port: ", PORT);
});
