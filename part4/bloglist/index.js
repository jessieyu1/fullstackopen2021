const http = require('http')
const express = require('express')
const app = express()
const logger = require('./utils/logger')
const config = require('./utils/config')

const mongoose = require('mongoose')



// logger.info('connecting to', config.MONGODB_URI)

// mongoose.connect(config.MONGODB_URI)
//   .then(() => {
//     logger.info('connected to MongoDB')
//   })
//   .catch((error) => {
//     logger.error('error connecting to MongoDB:', error.message)
//   })

// console.log('connecting to', mongoUrl)
// mongoose.connect(mongoUrl)
// const cors = require('cors')
// const mongoose = require('mongoose')
// app.use(cors())
// app.use(express.json())

// const blogSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   url: String,
//   likes: Number
// })

// const Blog = mongoose.model('Blog', blogSchema)





logger.info(`Server running on port ${config.PORT}`)