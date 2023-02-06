'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Orders', [{
      item_id: 1,
      user_id: 1,
      order_status: "active",
      order_total: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      item_id: 2,
      user_id: 1, 
      order_status: "cancel",
      order_total: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      item_id: 4,
      user_id: 2, 
      order_status: "active",
      order_total: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
