const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const ipstackApiKey = process.env.IPSTACK_API_KEY;
const openWeatherMapApiKey = process.env.OPENWEATHERMAP_API_KEY;

app.get('/api/hello', async (req, res) => {
  const visitorName = req.query.visitor_name || 'Guest';
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  try {
    // Get location from IP
    const ipstackUrl = `http://api.ipstack.com/${clientIp}?access_key=${ipstackApiKey}`;
    const locationResponse = await axios.get(ipstackUrl);
    const locationData = locationResponse.data;
    const location = locationData.city || 'Unknown Location';

    // Get temperature from location
    const openWeatherMapUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${openWeatherMapApiKey}`;
    const weatherResponse = await axios.get(openWeatherMapUrl);
    const weatherData = weatherResponse.data;
    const temperature = weatherData.main.temp;

    const response = {
      client_ip: clientIp,
      location: location,
      greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location}`
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
