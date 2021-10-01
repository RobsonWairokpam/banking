const router = require("express").Router();
const Controller = require("./controller");

router.post("/", Controller.AddStaff);
router.patch("/:staff_id", Controller.UpdateStaff);
router.delete("/:staff_id", Controller.DeleteStaff);
router.get("/:staff_id", Controller.GetStaffById);
router.get("/", Controller.GetStaffs);

module.exports = router;
