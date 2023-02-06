const { Item } = require('../models/index');


class ItemController {

    async getAllItems(req, res) {
        
        const getItem = await Item.findAll();

        return getItem
    }
    
}

module.exports = ItemController;