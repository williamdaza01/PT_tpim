const { Pool } = require("pg");

const pool = new Pool({
    host: 'localhost',
    user: "postgres",
    password: "lt123456",
    database: "postgres",
    port: 5432
})

//GET
const getSales = async(req,res) => {
    const response = await pool.query('SELECT * FROM "Db_Store".sales');
    res.status(200).json(response.rows);
}

const getProducts = async(req,res) => {
    const response = await pool.query('SELECT * FROM "Db_Store".products');
    res.status(200).json(response.rows);
}

const getUsers = async(req,res) => {
    const response = await pool.query('SELECT * FROM "Db_Store".users');
    res.status(200).json(response.rows);
}

const getSalesDay = async (req,res) => {
    const date = req.params.date;
    console.log(date);
    const response = await pool.query(`select count(*) from "Db_Store".sales
    where sales_at = date('${date}');`);
    res.status(200).json(response.rows);
}

const getSalesMonth = async (req,res) => {
    const date = req.params.sales_at;
    const response = await pool.query(`select count(s.id), date_trunc('month', '${date}') as date
    from "Db_Store".sales s
    group by date;`);
    res.status(200).json(response.rows);
}



module.exports = {
    getSales,
    getProducts,
    getUsers,
    getSalesDay,
    getSalesMonth,
}