const router = require("express").Router();
const Controller = require("./controller");

router.post("/", Controller.AddBranch);
router.patch("/:branch_id", Controller.UpdateBranch);
router.delete("/:branch_id", Controller.DeleteBranch);
router.get("/:branch_id", Controller.GetBranchById);
router.get("/", Controller.GetBranch);

module.exports = router;
