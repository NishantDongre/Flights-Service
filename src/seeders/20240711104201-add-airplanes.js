"use strict";
const { Op } = require("sequelize");
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

        await queryInterface.bulkInsert(
            "Airplanes",
            [
                {
                    modelNumber: "Boeing 747",
                    capacity: 660,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A380",
                    capacity: 750,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 777-300",
                    capacity: 480,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A350-1000",
                    capacity: 450,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 787-9",
                    capacity: 300,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A330-300",
                    capacity: 330,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 737-800",
                    capacity: 180,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A320neo",
                    capacity: 180,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 767-400ER",
                    capacity: 420,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A321neo",
                    capacity: 240,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 737 MAX 8",
                    capacity: 210,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A220-300",
                    capacity: 150,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 787-10",
                    capacity: 360,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A350-900",
                    capacity: 360,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 777-200LR",
                    capacity: 300,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A340-600",
                    capacity: 390,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 737-900ER",
                    capacity: 210,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A319",
                    capacity: 150,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 757-300",
                    capacity: 300,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A330-200",
                    capacity: 420,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
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

        await queryInterface.bulkDelete("Airplanes", {
            [Op.or]: [
                { modelNumber: "Boeing 747" },
                { modelNumber: "Boeing 737" },
                { modelNumber: "Boeing 777" },
            ],
        });
    },
};
