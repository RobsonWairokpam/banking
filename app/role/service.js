const Postgres = require("../../config/pg");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  AddRole(body, callback) {
    const { name } = body;
    if (!name || name === "") {
      return callback(400, { error: "Name cannot be empty" });
    }
    const db = Postgres.db;
    const id = uuidv4();
    db.none(
      `INSERT INTO role (role_id,role_name,created_on,is_active) VALUES ('${id}','${name}',now(),true)`
    )
      .then((res) => {
        callback(200, { role_id: id, role_name: name });
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
  UpdateRole(body, callback) {
    const { role_name, role_id } = body;
    const db = Postgres.db;
    db.none(
      `UPDATE role SET role_name='${role_name}' WHERE role_id='${role_id}' `
    )
      .then((res) => {
        callback(200, { role_id: role_id, role_name: role_name });
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
  DeleteRole(body, callback) {
    const { role_id } = body;
    const db = Postgres.db;
    db.none(`UPDATE role SET is_active=false WHERE role_id='${role_id}' `)
      .then((res) => {
        callback(200, { role_id: role_id });
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
  GetRoles(body, callback) {
    const db = Postgres.db;
    db.query(`SELECT * FROM role WHERE is_active=true`)
      .then((res) => {
        callback(200, res);
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
  GetRoleById(body, callback) {
    const { role_id } = body;
    const db = Postgres.db;
    db.query(
      `SELECT * FROM role WHERE is_active=true and role_id='${role_id}' `
    )
      .then((res) => {
        callback(200, res);
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
};
