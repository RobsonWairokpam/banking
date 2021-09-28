const router = require("express").Router();
const Controller = require("./controller");

router.post("/", Controller.AddRole);
router.get("/",Controller.PullRole)

module.exports = router;
