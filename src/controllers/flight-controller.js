const { StatusCodes } = require("http-status-codes");

const { FlightService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /flights
 * req-body {
 *  flightNumber: 'UK 808',
 *  airplaneId: 'a380',
 *  departureAirportCode: 12,
 *  arrivalAirportCode: 11,
 *  arrivalTime: '11:10:00',
 *  departureTime: '9:10:00',
 *  price: 2000
 *  boardingGate: '12A',
 *  departureAirportCode: 120
 * }
 */
async function createFlight(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportCode: req.body.departureAirportCode,
            arrivalAirportCode: req.body.arrivalAirportCode,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeatsAvailable: req.body.totalSeatsAvailable,
        });
        SuccessResponse.data = flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
};
