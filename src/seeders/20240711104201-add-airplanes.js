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
                    capacity: 853,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 777-300",
                    capacity: 550,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A350-1000",
                    capacity: 440,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 787-9",
                    capacity: 296,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A330-300",
                    capacity: 335,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 737-800",
                    capacity: 189,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A320neo",
                    capacity: 194,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 767-400ER",
                    capacity: 375,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A321neo",
                    capacity: 244,
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
                    capacity: 160,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 787-10",
                    capacity: 318,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A350-900",
                    capacity: 325,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 777-200LR",
                    capacity: 317,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A340-600",
                    capacity: 379,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 737-900ER",
                    capacity: 220,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A319",
                    capacity: 156,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 757-300",
                    capacity: 295,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A330-200",
                    capacity: 406,
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
