const router = require("express").Router();
const Controller = require("./controller");

router.post("/", Controller.AddRole);

module.exports = router;
