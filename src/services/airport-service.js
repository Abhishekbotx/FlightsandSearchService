
const { AirportRespository } = require('../repository/index');

class AirportService {
    constructor() {
        this.airportRespository = new AirportRespository();
        
    }

    async Create(data){
        try {
            const response=await this.airportRespository.createAirport(data)
            return response;
        } catch (error) {
            console.error('error in airport services:',error)
            throw error
        }
    }
    async delete(id){
        try {
            const response=await this.airportRespository.deleteAirport(id)
        } catch (error) {
            console.error('error in airport services:',error)
            throw error
        }
    }

    async getAirport(id){
        try {
            const response=await this.airportRespository.getAirport(id)
        } catch (error) {
            console.error('error in airport services:',error)
            throw error
        }
    }

    async getAllAirports(data){
        try {
            const airports=await this.airportRespository.getAllAirports(data)
            return airports
        } catch (error) {
            throw error
        }
    }


}

module.exports = AirportService;