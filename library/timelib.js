const moment = require('moment')
const momentTz = require('moment-timezone')
const timezone = 'Asia/Kolkatha'

let now = ()=>{
    return moment.utc().formate()
}

let localTime = () =>{
    return moment().tz(timezone).formate()
}

let convertToLocalTime =() =>{
    return momentTz.tz(time,timezone).formate('LLL')
}
module.exports = {
    now:now,
    localTime : localTime,
    convertToLocalTime : convertToLocalTime
}