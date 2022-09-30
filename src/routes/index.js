const { Router } = require("express");
const router = Router();

const { 
    getProducts, getSales, getUsers, getSalesDay, getSalesMonth,
    postProduct, postRole, postSales, postUser,
    putRole, putSale,
    deleteSale, deleteUser
 } = require("../controllers/index.controllers");

router.get('/users', getUsers);
router.get('/sales', getSales);
router.get('/sales/:date', getSalesDay);
router.get('/sales/salesXmonth/:date', getSalesMonth);
router.get('/products', getProducts);
router.post('/users', postUser);
router.post('/sales', postSales);
router.post('/products', postProduct);
router.post('/roles', postRole);
router.put('/users/:id', putRole);
router.put('/sales/:id', putSale);
router.delete('/sales/:id', deleteSale);
router.delete('/users/:id', deleteUser);

module.exports = router;