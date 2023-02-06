const router = require('express').Router();
const item = require("../controller/item.controller");

const itemClass = new item();

// Get all items
router.get("/items", (req, res, next) => {

    itemClass.getAllItems()
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

module.exports = router;