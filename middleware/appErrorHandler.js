const { model } = require("mongoose")
const response = require('../library/responselib')

let errorHandler =(err,req,res,next)=>{
    console.log('App Error handler called')
    console.log(err)
    let apiResponse = response.generate(true,'Some error ocured at global level',500,null)
    res.send(apiResponse)
}

let notFoundHandler =(req,res,next)=>{
    console.log('Global not found handler called')
    let apiResponse = response.generate(true,'Route not found in the application',400,null)
    res.status(404).send(apiResponse)
}

module.exports={
    errorHandler:errorHandler,
    notFoundHandler:notFoundHandler

}