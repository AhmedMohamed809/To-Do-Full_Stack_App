const Pool = require("pg").Pool;
const connectionString = process.env.DATABASE_URL + "?sslmode=require";
const pool =new Pool({
    // user : "postgres",
    // password:"0007",
    // host:"localhost",
    // port:5432,
    // database:"perntodo"
    connectionString
})

module.exports =pool;