const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");

const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { compareTime } = require("../utils/helpers/datetime-helpers");

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        if (!compareTime(data.departureTime, data.arrivalTime)) {
            throw new AppError(
                "departureTime is greater than arrivalTime",
                StatusCodes.BAD_REQUEST
            );
        }
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        if (error.name == "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        } else if (error.name == "SequelizeForeignKeyConstraintError") {
            console.log(error);
            throw new AppError(
                `Foreign key constraint fails ${JSON.stringify(error.fields)}`,
                StatusCodes.BAD_REQUEST
            );
        } else if (error instanceof AppError) {
            throw new AppError(error.message, error.statusCode);
        }
        throw new AppError(
            "Cannot create a new Flight object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAllFlights(query) {
    let customFilter = {};
    let sortFilter = [];
    const endingTripTime = " 23:59:00";
    // trips=MUM-DEL
    if (query.trips) {
        [departureAirportCode, arrivalAirportCode] = query.trips.split("-");
        customFilter.departureAirportCode = departureAirportCode;
        customFilter.arrivalAirportCode = arrivalAirportCode;
        // TODO: add a check that they are not same
    }
    if (query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, maxPrice == undefined ? 20000 : maxPrice],
        };
    }
    if (query.travellers) {
        customFilter.totalSeatsAvailable = {
            [Op.gte]: query.travellers,
        };
    }
    if (query.tripDate) {
        customFilter.departureTime = {
            [Op.between]: [query.tripDate, query.tripDate + endingTripTime],
        };
    }
    if (query.sort) {
        const params = query.sort.split(",");
        const sortFilters = params.map((param) => param.split("_"));
        sortFilter = sortFilters;
    }
    // console.log("customFilter:", customFilter);
    // console.log("sortFilter: ", sortFilter);
    try {
        const flights = await flightRepository.getAllFlights(
            customFilter,
            sortFilter
        );
        return flights;
    } catch (error) {
        throw new AppError(
            "Cannot fetch data of all the flights",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = {
    createFlight,
    getAllFlights,
};