const axios = require('axios');


const handleGetLocation = async (address) => {
    const url = `http://ipwhois.app/json/${address}`;
    try {
        const res = await axios.get(url);
        const data = await res.data.city
        return data
    } catch (error) {
        console.error(error);

    }

}

const key1 = process.env.OPENWEATHERMAP_API_KEY

const handleGetTemperature = async (city) => {
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key1}`;
    try {
        const response = await axios.get(endpoint)
        const data = await response.data.main.temp
        return data
    } catch (error) {
        console.log("Error getting weather data")
    }

}






module.exports = { handleGetLocation, handleGetTemperature }