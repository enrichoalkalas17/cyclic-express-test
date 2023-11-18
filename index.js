const Express = require('express')
const App = Express()
const Morgan = require('morgan')
const Cors = require('cors')
const Dotenv = require('dotenv')

const PORT = process.env.PORT || 3000

App.use(Morgan('dev'))
App.use(Cors())
App.use(Express.json())
App.use(Express.urlencoded({ extended: true }))

App.listen(PORT, () => console.log(`Server is running in port : ${ PORT }`))

App.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Successfull to go api dashboard!',
        statusText: 'Successfull to go api dashboard!',
        statusCode: 200
    })
})