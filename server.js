const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
dotenv.config();
// Initialize Express app
const app = express()
const connectDb = require("./config/connectDB");
connectDb();
// Middlewares
app.use(morgan('dev'))
app.use(express.json()) // Fix: Correct spelling of express.json()
app.use(cors())

// Routes
app.get('/', (req, res) => {
    res.send("<h1>Hello from server</h1>")
})

// Define port
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
