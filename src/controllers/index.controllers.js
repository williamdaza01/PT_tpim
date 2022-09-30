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

//POST
const postSales = async(req,res) => {
 //console.log(req);
    const {qty, sales_at, product_id, user_id} = req.body;
    console.log(product_id);
    const response = await pool.query(`INSERT INTO "Db_Store".sales(qty, sales_at, product_id, user_id) 
                                        VALUES(${qty}, '${sales_at}', '${product_id}', '${user_id}');`);
    res.json({
        message: "Venta creada",
        body: {
            sale: {qty, sales_at, product_id, user_id}
        }
    });
}

const postProduct = async(req,res) => {
    const {description, name, price} = req.body;
    const response = await pool.query(`INSERT INTO "Db_Store".products(description, name, price)
                                       VALUE('${description}', '${name}', ${price});`);
    res.json({
        message: "Producto creado",
        body:{
            sale: {description, name, price}
        }
    });
}

const postUser = async(req,res) => {
    const {name, last_name, document, role_id} = req.body;
    const response = await pool.query(`INSERT INTO "Db_Store".users(name, last_name, document, role_id)
                                       VALUE('${name}', '${last_name}', '${document}', '${role_id}');`);
    res.json({
        message: "Usuario creado",
        body:{
            sale: {name, last_name, document, role_id}
        }
    });
}

const postRole = async(req,res) => {
    const {name} = req.body;
    const response = await pool.query(`INSERT INTO "Db_Store".users(name)
                                       VALUE('${name}');`);
    res.json({
        message: "Rol creado",
        body:{
            sale: {name}
        }
    });
}

//PUT
const putSale = async (req,res) => {
    const id = req.params.id;
    const {qty, sales_at} = req.body;
    const response = await pool.query(`update "Db_Store".sales set qty = ${qty} , sales_at = '${sales_at}' 
                                      where id= '${id}'`);
    res.json("Venta actualizada con exito");
}

const putRole = async (req,res) => {
    const id = req.params.id;
    const {role_id} = req.body;
    const response = await pool.query(`update "Db_Store".users set role_id = '${role_id}'
                                      where id= '${id}'`);
    res.json("Rol actualizado con exito");
}

//DELETE
const deleteSale = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query(`delete from "Db_Store".sales where '${id}'`);
    res.json("venta eliminada con exito");
}

const deleteUser = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query(`delete from "Db_Store".users where '${id}'`);
    res.json("Usuario eliminado con exito");
}

module.exports = {
    getSales,
    getProducts,
    getUsers,
    getSalesDay,
    getSalesMonth,
    postProduct,
    postRole,
    postSales,
    postUser, 
    putRole,
    putSale,
    deleteSale,
    deleteUser
}