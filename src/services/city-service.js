const {CityRepository} = require('../respository/index')

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }
    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        }catch(error){
            console.log("Something went wrong at service layer")
            throw {error};
        }
    }

    async deleteCity(cityId,data){
        try{
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        }
        catch(error){
            console.log('Something went wrong at service layer');
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await this.cityRepository.updateCity(cityId,data)
            return city;
        }catch(error){
            console.log('Something went wrong at service layer');
            throw {error}
        }
    }

    async getCity(cityId){
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;
        }
        catch(error){
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}


module.exports = CityService