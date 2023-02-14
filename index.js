const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
// Look inside public folder inside the main directory
const staticMiddleware = express.static(path.join(__dirname, 'public'))
// Requiring/importing our routes file
const medicalBillsRoutes = require('./routes/medicalBills')


// Body parsing middleware
// For form data
app.use(express.urlencoded())
// For JSON data
app.use(express.json())
app.use(staticMiddleware)
// localhost:1340/bills
app.use('/bills', medicalBillsRoutes)
// Logging middleware
app.use(morgan('dev'))

// Home Page
app.get('/', (req, res, next) => {
    console.log('Hello, I hit the home page')
    // res.send(homePage())
})



// At the end
// Custom Middleware
app.use((err, req, res, next) => {
    console.log(err.status)
    // res.send(serverError())
})

// 404 middleware
app.use((req, res, next) => {
    res.status(404).send(notFound())
})

app.listen(
    1340,
    () => {
        console.log("Hey, I'm connected to port 1340")
    }
)

// console.log(app._router.stack)