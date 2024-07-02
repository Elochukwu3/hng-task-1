const express = require('express');
const route = express.Router();

route.get('/hello', (req, res)=>{
    const visitorName = req.query.visitor_name || 'Guest';
    const location = 'New York'; 
    // console.log(req.ip);
    const response = {
        client_ip: clientIp,
        location: location,
        greeting: `Hello, ${visitorName}!, the temperature is 11 degrees Celsius in ${location}`
      };
    res.json(response);
})

module.exports = route;