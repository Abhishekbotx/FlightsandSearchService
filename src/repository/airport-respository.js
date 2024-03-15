const { Airport } = require('../models/index');
const { Op } = require('sequelize');
class AirportRespository  {
    async createAirport(data){
        try {
            const airport=await Airport.create(data);
            return airport
        } catch (error) {
            console.error('error in repo layer:',error)
            throw error
        }
    }


    async deleteAirport(id){
        try {
            const response=await Airport.destroy(id)
        } catch (error) {
            console.error('error in airplane services:',error)
            throw error
        }
    }

    async getAirport(id) {
        try {
            const Airport = await Airport.findByPk(id);
            return Airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }


    async getAllAirports(filter) { 
        try {
            if (filter.name) {
                const airports = await Airport.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return airports;
            }
            const airports = await Airport.findAll();
            return airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = AirportRespository;