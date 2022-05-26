const Pool = require("pg").Pool;

const pool = new Pool({
  user: "dashiellboyles",
  password: "1234",
  host: "localhost",
  port: "5432",
  database: "football"
});

module.exports = pool;