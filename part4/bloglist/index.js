const http = require('http')
const express = require('express')
const app = express()
const logger = require('./utils/logger')
const config = require('./utils/config')


logger.info(`Server running on port ${config.PORT}`)

