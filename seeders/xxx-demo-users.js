'use strict'; module.exports = {
async up(queryInterface) {
await queryInterface.bulkInsert('Users', [{ name: 'Aji',
email: 'aji@mail.com',
password_hash: '$2b$10$contohHashBcryptYangPanjang...', createdAt: new Date(),
updatedAt: new Date(),
}]);
},
async down(queryInterface) {
await queryInterface.bulkDelete('Users', null, {});
},
};