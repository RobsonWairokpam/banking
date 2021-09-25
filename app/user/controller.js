const router = require("./router");
const Service = require("./service");

module.exports = {
  User(req, res) {
    Service.User(req.body, (err, statusCode, results) => {
      if (err) {
        res.status(statusCode).json({ error: err });
      } else {
        res.status(statusCode).json({ message: results });
      }
    });
  },
};