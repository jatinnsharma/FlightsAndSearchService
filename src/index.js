const express = require('express')
const bodyParser = require('body-parser')
const ApiRoutes = require('./routes/index')
const {PORT} = require('./config/serverConfig')

const setupAndStartServer = async () =>{

    // create the express object
    const app = express();

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api', ApiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server is running on PORT ${PORT}`)
        
    })

}

setupAndStartServer()