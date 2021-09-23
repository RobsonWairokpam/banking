const { Postgres } = require("../../config/pg");

module.exports = {
  Login(body, callback) {
    const { email, password } = body;
    const db = Postgres.db;
    db.connect();
    db.query(
      `SELECT * from auth WHERE email='${email}'  password='${password}'`,
      (err, res) => {
        db.end();
        console.log(err, res);
        callback(err, 200, res);
      }
    );
  },
};
