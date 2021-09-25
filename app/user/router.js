const router = require("express").Router();
const Controller = require("./controller");

router.post("/user", Controller.User);
router.get("/user/:id", Controller.User);

module.exports = router;
