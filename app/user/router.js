const router = require("express").Router();
const Controller = require("./controller");

router.post("/user", Controller.Add_User);
router.get("/getuser/:id", Controller.Get_User);


module.exports = router;
