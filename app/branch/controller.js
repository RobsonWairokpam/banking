const router = require("./router");
const Service = require("./service");

module.exports = {
  AddBranch(req, res) {
    Service.AddBranch(req.body, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },

  GetBranch(req, res) {
    Service.GetBranch(req.body, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },
  UpdateBranch(req, res) {
    const { branch_id } = req.params;
    let body = req.body;
    body["branch_id"] = branch_id;
    Service.UpdateBranch(body, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },
  DeleteBranch(req, res) {
    Service.DeleteBranch(req.params, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },
  GetBranchById(req, res) {
    Service.GetBranchById(req.params, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },
};