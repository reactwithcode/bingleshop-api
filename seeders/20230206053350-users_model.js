'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      user_role: 'Buyer',
      user_name: 'Hari',
      user_email: 'thohari.akbar@gmail.com',
      user_password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_role: 'Buyer',
      user_name: 'Samuel',
      user_email: 'samuel@gmail.com',
      user_password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_role: 'Buyer',
      user_name: 'Michael',
      user_email: 'michael@gmail.com',
      user_password: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
