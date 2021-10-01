const router = require("./router");
const Service = require("./service");

module.exports = {
  AddStaff(req, res) {
    Service.AddStaff(req.body, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },

  GetStaffs(req, res) {
    Service.GetStaffs(req.body, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },
  UpdateStaff(req, res) {
    const { staff_id } = req.params;
    let body = req.body;
    body["staff_id"] = staff_id;
    Service.UpdateStaff(body, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },
  DeleteStaff(req, res) {
    Service.DeleteStaff(req.params, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },
  GetStaffById(req, res) {
    Service.GetStaffById(req.params, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },
};
