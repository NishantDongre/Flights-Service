"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        let airplanes = [
            {
                airplaneId: 1,
                capacity: 660,
            },
            {
                airplaneId: 2,
                capacity: 750,
            },
            {
                airplaneId: 3,
                capacity: 480,
            },
            {
                airplaneId: 4,
                capacity: 450,
            },
            {
                airplaneId: 5,
                capacity: 300,
            },
            {
                airplaneId: 6,
                capacity: 330,
            },
            {
                airplaneId: 7,
                capacity: 180,
            },
            {
                airplaneId: 8,
                capacity: 180,
            },
            {
                airplaneId: 9,
                capacity: 420,
            },
            {
                airplaneId: 10,
                capacity: 240,
            },
            {
                airplaneId: 11,

                capacity: 210,
            },
            {
                airplaneId: 12,

                capacity: 150,
            },
            {
                airplaneId: 13,
                capacity: 360,
            },
            {
                airplaneId: 14,

                capacity: 360,
            },
            {
                airplaneId: 15,
                capacity: 300,
            },
            {
                airplaneId: 16,
                capacity: 390,
            },
            {
                airplaneId: 17,
                capacity: 210,
            },
            {
                airplaneId: 18,
                capacity: 150,
            },
            {
                airplaneId: 19,
                capacity: 300,
            },
            {
                airplaneId: 20,
                capacity: 420,
            },
        ];

        function generateSeatsForAirplane(airplanes) {
            let allSeats = [];

            const airplaneSeats = airplanes.map((airplane) => {
                for (let row = 1; row <= airplane.capacity / 6; row++) {
                    for (let col = 65; col < 71; col++) {
                        let seat = {
                            airplaneId: airplane.airplaneId,
                            row,
                            col: String.fromCharCode(col),
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        };
                        allSeats.push(seat);
                    }
                }
            });
            return allSeats;
        }

        await queryInterface.bulkInsert(
            "Seats",
            generateSeatsForAirplane(airplanes),
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
