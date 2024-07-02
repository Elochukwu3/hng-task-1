const express = require('express')
const route = express.Router()
const getUser = require("../controller/userController")

route.get("/api/hello", getUser)


module.exports = route
