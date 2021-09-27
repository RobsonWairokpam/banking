// const { Pool, Client } = require("pg");
const pgp = require("pg-promise")();

// const db_pool = new Pool({
//   user: "admin",
//   host: "postgres",
//   database: "banking",
//   password: "admin@123",
//   port: 5432,
// });

// const db = new Client({
//   user: "admin",
//   host: "postgres",
//   database: "banking",
//   password: "admin@123",
//   port: 5432,
// });
var config = {
  user: "admin",
  password: "admin@123",
  database: "banking",
  host: "postgres",
  port: 5432,
};
const db = pgp(config);
const Postgres = {
  db,
};
module.exports = Postgres;
