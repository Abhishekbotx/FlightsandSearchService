const AirplaneRepository = require('../repository/airplane-repository')

class AirplaneService{
    constructor(){
        this.airplaneRepository=new AirplaneRepository()
    }

    async Create(data){
        try {
            const response=await this.airplaneRepository.createAirplane(data)
            return response;
        } catch (error) {
            console.error('error in airplane services:',error)
            throw error
        }
    }
    async delete(id){
        try {
            const response=await this.airplaneRepository.delete(id)
        } catch (error) {
            console.error('error in airplane services:',error)
            throw error
        }
    }

    async getAirplane(id){
        try {
            const response=await this.airplaneRepository.getAirplane(id)
        } catch (error) {
            console.error('error in airplane services:',error)
            throw error
        }
    }
}

module.exports=AirplaneService