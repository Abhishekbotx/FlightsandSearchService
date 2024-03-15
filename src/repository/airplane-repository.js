const { Airplane } = require('../models/index');

class AirplaneRepository {
    async createAirplane(data) {
        try {
            const airplane = await Airplane.create({ modelNumber: data.modelNumber, capacity: data.capacity })
            return airplane;
        }
        catch (error) {
            console.log("error while creating airplane:",error);

            throw { error };
        }
    }

    async deleteAirplane(id){
        try {
            const response=await Airplane.destroy(id)
        } catch (error) {
            console.error('error in airplane services:',error)
            throw error
        }
    }

    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
   


}

module.exports = AirplaneRepository;