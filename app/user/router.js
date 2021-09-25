const router = require("express").Router();
const Controller = require("./controller");

router.post("/User", Controller.User);

module.exports = router;
