const express = require('express')
const appConfig = require('./config/appConfig')
const app = express()
const fs = require('fs')
const mongoose  = require('mongoose')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const globalErrorMiddleware = require('./middleware/appErrorHandler')
const routeLogger = require('./middleware/routeLogger')
var helmet = require('helmet')
const http = require('http')
const logger = require('./library/loggerlib')



app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(cookieparser())
app.use(globalErrorMiddleware.errorHandler)
app.use(routeLogger.logIp)
app.use(helmet())


app.listen(appConfig.port, () => {
  console.log('Example app listening at http://localhost:3000')
  let db = mongoose.connect(appConfig.db.uri,{ useNewUrlParser: true})

})


mongoose.connection.on('err',function(err){
  console.log("database error")
  console.log(err)
})
mongoose.connection.on('open',function(err){
  if(err){
    console.log("database connection error")
    console.log(err)
  }else {
    console.log("database connection open")
  }
})

let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function(file){
  if(~file.indexOf('.js'))require(modelsPath+ '/' + file)
})
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function(file){
  if(~file.indexOf('.js')){
    console.log('include the files')
    console.log(routesPath+'/'+file)
    let route = require(routesPath + '/' + file)
    route.setRoute(app)
  }
})
app.use(globalErrorMiddleware.notFoundHandler)



const server = http.createServer(app)
console.log(appConfig)
server.listen(appConfig.port)
server.on('error',onError)
server.on('listening',onListening)


function onError(error) {
  if (error.syscall !== 'listen') {
      logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
      throw error
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
      case 'EACCES':
          logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
          process.exit(1)
          break
      case 'EADDRINUSE':
      logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
          process.exit(1)
          break
      default:
          logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
          throw error
  }
}

function onListening() {
  var addr = server.address()
  var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  ('Listening on ' + bind)
  logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10)
  let db = mongoose.connect(appConfig.db.uri, { useMongoClient: true })
}

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
  // application specific logging, throwing an error, or other logic here
})
  
