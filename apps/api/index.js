const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors');


// Load env vars
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()

const task = require('./routes/task')

const app = express()
app.use(cors());
app.use(express.json())

app.use('/task', task)

const PORT = process.env.PORT || 5000
const server = app.listen(
  PORT,
  console.log(
    'Server running in',
    process.env.NOED_ENV,
    ' mode on port ',
    PORT,
  ),
)

// Handle promise rejection
process.on('unhandledRejection', (err, Promise) => {
  console.log(`Error: ${err.message}`)
  // close server
  server.close(() => process.exit(1))
})
