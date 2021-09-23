const Service = require("./service");

module.exports = {
  Login(req, res) {
    Service.Login(req.body, (err, statusCode, results) => {
      if (err) {
        res.status(statusCode).json({ error: err });
      } else {
        res.status(statusCode).json({ message: results });
      }
    });
  },
};
