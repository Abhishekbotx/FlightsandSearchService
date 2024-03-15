const {AirplaneService} = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {
        const airplaneRequestData = {
            modelNumber: req.body.model,
            capacity:req.body.capacity
            
        }
        const flight = await airplaneService.createFlight(airplaneRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a airplane'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a airplane',
            err: error
        });
    }
}



const deleteAirplane = async (req, res) => {
    try {
        const response = await airplaneService.delete(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully deleted the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the flight',
            err: error
        });
    }
}
const getById = async (req, res) => {
    try {
        const response = await airplaneService.getAirplane(req.body.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the airplane'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the airplane',
            err: error
        });
    }
}



module.exports = {
    create,
    deleteAirplane,
    getById
}