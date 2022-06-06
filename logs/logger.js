const winston=require('winston')
const logConfinguration={
    transports:[
        new winston.transports.Console({
            level:'info'
        }),
        new winston.transports.Console({
            level:'warn'
        }),
        new winston.transports.File({
            level:'error',
            filename:'logs/logger.log'
        }),
      
        // new winston.transports.MongoDB({
        //     level:'error',
        //     db:'mongodb://srv1:27017/212628143racheli&faigy',
        //     options:{
        //         useUnifiedTopology:true
        //     },
        //     collection:'server_logs'
            // ,
            // format:format.combine(
            //     format.timestamp(),
            //     format.json()
            // )
            
        // })
        
    ]
}
module.exports=winston.createLogger(logConfinguration) 