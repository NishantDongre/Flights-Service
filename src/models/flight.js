"use strict";
const { Model } = require("sequelize");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
module.exports = (sequelize, DataTypes) => {
    class Flight extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Airplane, {
                foreignKey: "airplaneId",
                as: "airplaneDetail",
            });
            this.belongsTo(models.Airport, {
                foreignKey: "departureAirportCode",
                as: "departureAirport",
            });
            this.belongsTo(models.Airport, {
                foreignKey: "arrivalAirportCode",
                as: "arrivalAirport",
            });
        }
    }
    Flight.init(
        {
            flightNumber: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            airplaneId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            departureAirportCode: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            arrivalAirportCode: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            arrivalTime: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            departureTime: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            boardingGate: {
                type: DataTypes.STRING,
            },
            totalSeatsAvailable: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Flight",
            hooks: {
                beforeValidate: async (flight, options) => {
                    console.log("inside beforeValidate");
                    if (!flight.totalSeatsAvailable) {
                        console.log(
                            "totalSeatsAvailable not send in req.body "
                        );
                        try {
                            const airplane =
                                await sequelize.models.Airplane.findByPk(
                                    flight.airplaneId
                                );
                            flight.totalSeatsAvailable = airplane.capacity;
                        } catch (error) {
                            throw new AppError(
                                "Airplane Not found with this ID",
                                StatusCodes.BAD_REQUEST
                            );
                        }
                    }
                },
            },
        }
    );
    return Flight;
};
