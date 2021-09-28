const router = require("express").Router();
const Controller = require("./controller");

router.post("/", Controller.AddRole);
router.patch("/:role_id", Controller.UpdateRole);
router.delete("/:role_id", Controller.DeleteRole);
router.get("/:role_id", Controller.GetRoleById);
router.get("/", Controller.GetRoles);

module.exports = router;
