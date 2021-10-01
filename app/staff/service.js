const Postgres = require("../../config/pg");
const { v4: uuidv4 } = require("uuid");


module.exports = {
  AddStaff(body, callback) {
    const { name,address,email,mobile,gender,branch_id,role_id} = body;
    if (!name || name === "") {
      return callback(400, { error: "Name cannot be empty" });
    }
    const db = Postgres.db;
    const id = uuidv4();
    db.none(
      `INSERT INTO staff (staff_id,name,address,email,mobile,gender,branch_id,role_id,created_on,is_active) VALUES ('${id}','${name}','${address}','${email}','${mobile}','${gender}','${branch_id}','${role_id}',now(),true)`
    )
      .then((res) => {
        callback(200, { staff_id: id, name: name,address: address,email:email,mobile:mobile,gender:gender,branch_id:branch_id,role_id:role_id });
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
  UpdateStaff(body, callback) {
    const { name, staff_id,address,email,mobile,gender,branch_id,role_id} = body;
    const db = Postgres.db;
    db.none(
      `UPDATE staff SET name='${name}',address='${address}',email='${email}',mobile='${mobile}',gender='${gender}' ,branch_id='${branch_id}',role_id='${role_id}'WHERE staff_id='${staff_id}' `
    )
      .then((res) => {
        callback(200, { staff_id: staff_id, name:name,email: email,mobile: mobile,gender: gender,branch_id:branch_id,role_id:role_id });
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
  DeleteStaff(body, callback) {
    const { staff_id } = body;
    const db = Postgres.db;
    db.none(`UPDATE staff SET is_active=false WHERE staff_id='${staff_id}' `)
      .then((res) => {
        callback(200, { staff_id: staff_id });
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
  GetStaffs(body, callback) {
    const db = Postgres.db;
    db.query(`SELECT * FROM staff WHERE is_active=true`)
      .then((res) => {
        callback(200, res);
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },
  GetStaffById(body, callback) {
    const { staff_id } = body;
    const db = Postgres.db;
    db.query(
      `SELECT * FROM staff WHERE is_active=true and staff_id='${staff_id}' `
    )
      .then((res) => {
        callback(200, res);
      })
      .catch((err) => {
        callback(500, { error: err });
      });
  },

};
