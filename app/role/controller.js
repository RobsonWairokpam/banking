const router = require("./router");
const Service = require("./service");

module.exports = {
  AddRole(req, res) {
    Service.AddRole(req.body, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },

  GetRoles(req, res) {
    Service.GetRoles(req.body, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },
  UpdateRole(req, res) {
    const { role_id } = req.params;
    let body = req.body;
    body["role_id"] = role_id;
    Service.UpdateRole(body, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },
  DeleteRole(req, res) {
    Service.DeleteRole(req.params, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },
  GetRoleById(req, res) {
    Service.GetRoleById(req.params, (statusCode, results) => {
      res.status(statusCode).json(results);
    });
  },
};
