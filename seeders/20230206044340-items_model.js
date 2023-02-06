'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Items', [{
      item_name: 'Macbook Pro M1 16gb SSD 1Tb 2021',
      item_description: "Macbook Pro M1 16gb SSD 1Tb from 2021",
      item_price: 36500000,
      item_status: 'Second-hand',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      item_name: 'Macbook Pro M1 16gb SSD 512gb 2020',
      item_description: "Macbook Pro M1 16gb SSD 512gb from 2020",
      item_price: 26000000,
      item_status: 'Second-hand',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      item_name: 'Macbook Air M1 16gb SSD 512gb 2020',
      item_description: "Macbook Air M1 16gb SSD 512gb from 2020",
      item_price: 23000000,
      item_status: 'Second-hand',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      item_name: 'Macbook Pro Intel Core I5 16gb SSD 512gb 2017',
      item_description: "Macbook Pro Intel Core I5 16gb SSD 512gb from 2017",
      item_price: 15000000,
      item_status: 'Second-hand',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      item_name: 'Macbook Pro Intel Core I5 8gb SSD 512gb 2018',
      item_description: "Macbook Pro Intel Core I5 8gb SSD 512gb from 2018",
      item_price: 10000000,
      item_status: 'Second-hand',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      item_name: 'Macbook Pro M2 16gb SSD 1Tb 2022',
      item_description: "Macbook Pro M2 16gb SSD 1Tb from 2022",
      item_price: 45000000,
      item_status: 'New',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      item_name: 'Macbook Air M2 16gb SSD 512gb 2023',
      item_description: "Macbook Air M2 16gb SSD 512gb from 2022",
      item_price: 35000000,
      user_id: 2,
      item_status: 'New',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
