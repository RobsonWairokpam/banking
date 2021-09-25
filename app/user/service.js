const { Postgres } = require("../../config/pg");

module.exports = {
  User(body, callback) {
    const { name,address,gender } = body;
    const db = Postgres.db;
    db.connect();
    db.query(
        
      `SELECT * from user WHERE name='${name}' AND address='${address}'AND gender='${gender}'`,
      (err, res) => {
        db.end();
        console.log(err, res);
        callback(err, 200, res);
      }
    );
  },
};
