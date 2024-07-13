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

        await queryInterface.bulkInsert(
            "Airports",
            [
                {
                    name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                    code: "BOM",
                    address: "Mumbai, Maharashtra 400099",
                    cityId: "1",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Indira Gandhi International Airport, Delhi",
                    code: "DEL",
                    address: "New Delhi, Delhi 110037",
                    cityId: "2",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Kempegowda International Airport, Bengaluru",
                    code: "BLR",
                    address: "Bengaluru, Karnataka 560300",
                    cityId: "3",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Chennai International Airport, Chennai",
                    code: "MAA",
                    address: "Chennai, Tamil Nadu 600027",
                    cityId: "4",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Netaji Subhas Chandra Bose International Airport, Kolkata",
                    code: "CCU",
                    address: "Kolkata, West Bengal 700052",
                    cityId: "5",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Rajiv Gandhi International Airport, Hyderabad",
                    code: "HYD",
                    address: "Hyderabad, Telangana 500409",
                    cityId: "6",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Pune Airport, Pune",
                    code: "PNQ",
                    address: "Pune, Maharashtra 411032",
                    cityId: "7",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Sardar Vallabhbhai Patel International Airport, Ahmedabad",
                    code: "AMD",
                    address: "Ahmedabad, Gujarat 380003",
                    cityId: "8",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Goa International Airport, Goa",
                    code: "GOI",
                    address: "Dabolim, Goa 403801",
                    cityId: "9",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Jaipur International Airport, Jaipur",
                    code: "JAI",
                    address: "Jaipur, Rajasthan 302017",
                    cityId: "10",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Cochin International Airport, Kochi",
                    code: "COK",
                    address: "Kochi, Kerala 683111",
                    cityId: "11",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Chaudhary Charan Singh International Airport, Lucknow",
                    code: "LKO",
                    address: "Lucknow, Uttar Pradesh 226009",
                    cityId: "12",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Dr. Babasaheb Ambedkar International Airport, Nagpur",
                    code: "NAG",
                    address: "Nagpur, Maharashtra 440005",
                    cityId: "13",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Visakhapatnam Airport, Visakhapatnam",
                    code: "VTZ",
                    address: "Visakhapatnam, Andhra Pradesh 530009",
                    cityId: "14",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Trivandrum International Airport, Thiruvananthapuram",
                    code: "TRV",
                    address: "Thiruvananthapuram, Kerala 695008",
                    cityId: "15",
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
    },
};
