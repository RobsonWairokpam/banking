const Postgres = require("../../config/pg");
const { v4: uuidv4 } = require("uuid");


module.exports = {
  AddBranch(body, callback) {
    const { name,address } = body;
    if (!name || name === "") {
      return callback(400, { error: "Name cannot be empty" });
    }
    if (!address ||address === "") {
      return callback(400, { error: "address cannot be empty" });
    }
    const db = Postgres.db;
    const id = uuidv4();
    db.none(
      `INSERT INTO branch (branch_id,name,address,created_on,is_active) VALUES ('${id}','${name}','${address}',now(),true)`
    )
      .then((res) => {
        callback(200, { branch_id: id, name: name, address:address });
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
 
 
 
  UpdateBranch(body, callback) {
    const { name, branch_id,address } = body;
    const db = Postgres.db;
    db.none(
      `UPDATE branch SET name='${name}', address='${address}' WHERE branch_id='${branch_id}' `
    )
      .then((res) => {
        callback(200, { branch_id: branch_id, name:name });
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
  
  
  
  DeleteBranch(body, callback) {
    const { branch_id } = body;
    const db = Postgres.db;
    db.none(`UPDATE branch SET is_active=false WHERE branch_id='${branch_id}' `)
      .then((res) => {
        callback(200, { branch_id: branch_id });
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
 
 
 
  GetBranch(body, callback) {
    const db = Postgres.db;
    db.query(`SELECT * FROM branch WHERE is_active=true`)
      .then((res) => {
        callback(200, res);
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
  
  
  GetBranchById(body, callback) {
    const { branch_id } = body;
    const db = Postgres.db;
    db.query(
      `SELECT * FROM branch WHERE is_active=true and branch_id='${branch_id}' `
    )
      .then((res) => {
        callback(200, res);
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },

};
