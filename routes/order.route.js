const router = require('express').Router();
const order = require("../controller/order.controller");

const orderClass = new order();

// Get all orders
router.get("/orders", (req, res, next) => {

    orderClass.getAllOrders()
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })
        })
});

// Post / make new a new order
router.post('/orders', (req, res, next) => {
    orderClass.insertData(req.body)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

// PUT / update order status
router.put('/orders/order-status/:id', (req, res, next) => {
    console.log('req.params.id', req.params.id);
    console.log('req.body', req.body);
    orderClass.updateOrderStatus(req.params.id, req.body)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

module.exports = router;