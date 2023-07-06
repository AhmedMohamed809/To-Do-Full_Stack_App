const Pool = require("pg").Pool

const pool =new Pool({
    user : "postgres",
    password:"0007",
    host:"localhost",
    port:5000,
    database:"perntodo"
})

module.exports =pool;