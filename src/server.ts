import express from 'express'
import payload from 'payload'
import cors from 'cors';

require('dotenv').config()
const app = express()

// Configure CORS
app.use(cors({
  origin: 'http://127.0.1.1:3000/', // Replace with your allowed origin(s)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(5000)
}

start()
