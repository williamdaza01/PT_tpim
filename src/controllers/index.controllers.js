const { Pool } = require("pg");

const pool = new Pool({
    host: 'localhost',
    user: "postgres",
    password: "lt123456",
    database: "postgres",
    port: 5432
})

