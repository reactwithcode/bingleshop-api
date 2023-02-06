const { Order } = require('../models/index');


class OrderController {

    async getById(id) {
        const getOrder = await Order.findByPk(id)

        return getOrder
    }

    async getAllOrders(req, res) {
        
        const getOrder = await Order.findAll();

        return getOrder
    }

    async insertData(body) {

        const create = await Order.create({
            user_id: body.user_id,
            item_id: body.item_id,
            order_status: body.order_status,
            order_total: body.order_total
        })

        return create
    }

    async updateOrderStatus(id, body) {

        Order.update({
            user_id: body.user_id,
            item_id: body.item_id,
            order_status: body.order_status,
        }, {
            where: {
                id: id
            }
        })
        
        // return updateded data instead of "1"
        const resp = await this.getById(id)


        return resp
    }
    
}

module.exports = OrderController;