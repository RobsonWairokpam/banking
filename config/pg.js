const { Pool, Client } = require("pg");

const db_pool = new Pool({
  user: "admin",
  host: "postgres",
  database: "banking",
  password: "admin@123",
  port: 5432,
});

const db = new Client({
  user: "admin",
  host: "postgres",
  database: "banking",
  password: "admin@123",
  port: 5432,
});
const Postgres = {
  db_pool,
  db,
};
module.exports = Postgres;
