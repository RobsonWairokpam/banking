
const Service = require("./service");

module.exports = {
  Add_User(req, res) {
    Service.Add_User(req.body, (err, statusCode, results) => {
      if (err) {
        res.status(statusCode).json({ error: err });
      } else {
        res.status(statusCode).json({ message: results });
      }
    });
  },
  Get_User(req, res) {
    Service.User_Get(req.body, (err, statusCode, results) => {
      if (err) {
        res.status(statusCode).json({ error: err });
      } else {
        res.status(statusCode).json({ message: results });
      }
    });
  },
};