const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message: 'Successfully created the airport',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        })
    }
}
const deleteAirport= async (req, res) => {
    try {
        const response = await airportService.delete(req.body.id);
        return res.status(201).json({
            message: 'Successfully deleted the airport',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot delete the airport'
        })
    }
}
const getAirportById= async (req, res) => {
    try {
        const response = await airportService.getAirport(req.body.id);
        return res.status(201).json({
            message: 'Successfully deleted the airport',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot get the airport'
        })
    }
}
const getAllAirports= async (req, res) => {
    try {
        const response = await airportService.getAllAirports(req.body.name);
        return res.status(201).json({
            message: 'Successfully deleted the airport',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot get any  airport'
        })
    }
}




module.exports = {
    create,deleteAirport,getAirportById,getAllAirports
}