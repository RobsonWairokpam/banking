const router = require("express").Router();
const Controller = require("./controller");

router.post("/login", Controller.Login);

module.exports = router;
