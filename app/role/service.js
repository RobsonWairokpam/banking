const Postgres = require("../../config/pg");
const { v4: uuidv4 } = require("uuid");
const { PullRole } = require("./controller");

module.exports = {
  async AddRole(body, callback) {
    const { name } = body;
    const db = Postgres.db;
    // db.connect();
    // console.log("1");
    const res = await db
      .none(
        `INSERT INTO role (role_id,role_name,created_on,is_active) VALUES ('${uuidv4()}','${name}',now(),true)`,
        {
          name: name,
        }
      )
      .catch((err) => {
        console.log(err);
      });
    // db.end();
    console.log(res);
    if (res) {
      callback(null, 200, res);
    } else {
      callback(true, 500, "Something went wrong");
    }
  },
  async PullRole(body, callback) {
    const { name } = body;
    const db = Postgres.db;
    // db.connect();
    // console.log("1");
    const res = await db
      .none(
        `INSERT INTO role (role_id,role_name,created_on,created_by,is_active) VALUES ('${uuidv4()}','${name}',now(),'${name}',true)`,
        {
          name: name,
        }
      )
      .catch((err) => {
        console.log(err);
      });
    // db.end();
    console.log(res);
    if (res) {
      callback(null, 200, res);
    } else {
      callback(true, 500, "Something went wrong");
    }
  },
};
