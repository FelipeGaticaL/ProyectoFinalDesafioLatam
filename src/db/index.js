const { Pool } = require("pg");


const isProduction = process.env.NODE_ENV === "production";

const pool = isProduction ?
    new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    }) :
    new Pool({
        user: "postgres",
        host: "localhost",
        password: "1234",
        database: "proyecto",
        port: 5432,
    });

module.exports = pool;