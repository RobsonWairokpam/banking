const router = require("./router");
const Service = require("./service");

module.exports = {
  AddRole(req, res) {
    Service.AddRole(req.body, (err, statusCode, results) => {
      if (err) {
        res.status(statusCode).json({ error: err });
      } else {
        res.status(statusCode).json({ message: results });
      }
    });
  },
};
