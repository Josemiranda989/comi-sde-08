// En el archivo de seeder demo-countries.js
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Countries', [
            {
                name: 'Argentina',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Colombia',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'México',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Dinamarca',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Italia',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // Agrega más países según sea necesario
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Countries', null, {});
    }
};