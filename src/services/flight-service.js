const { StatusCodes } = require("http-status-codes");

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

module.exports = {
    createFlight,
};
