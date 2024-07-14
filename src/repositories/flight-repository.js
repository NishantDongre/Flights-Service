const { Sequelize } = require("sequelize");

const CrudRepository = require("./crud-repository");
const { Flight, Airplane, Airport } = require("../models");

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: "airplaneDetail",
                },
                {
                    model: Airport,
                    required: true,
                    as: "departureAirport",
                    on: {
                        col1: Sequelize.where(
                            Sequelize.col("Flight.departureAirportCode"),
                            "=",
                            Sequelize.col("departureAirport.code")
                        ),
                    },
                },
                {
                    model: Airport,
                    required: true,
                    as: "arrivalAirport",
                    on: {
                        col1: Sequelize.where(
                            Sequelize.col("Flight.arrivalAirportCode"),
                            "=",
                            Sequelize.col("arrivalAirport.code")
                        ),
                    },
                },
            ],
        });
        return response;
    }
}

module.exports = FlightRepository;
