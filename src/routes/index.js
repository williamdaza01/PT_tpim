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
router.get('/sales/:date/:roleid', getSalesDay);
router.get('/salesXmonth/:date/:roleid', getSalesMonth);
router.get('/products', getProducts);
router.post('/users/:roleid', postUser);
router.post('/sales/:roleid', postSales);
router.post('/products/:roleid', postProduct);
router.post('/roles/:roleid', postRole);
router.put('/users/:id/:roleid', putRole);
router.put('/sales/:id/:roleid', putSale);
router.delete('/sales/:id/:roleid', deleteSale);
router.delete('/users/:id/:roleid', deleteUser);

module.exports = router;