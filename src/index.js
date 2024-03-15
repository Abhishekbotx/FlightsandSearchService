const express = require("express");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');


const setupAndStartServer = async () => {

    const app = express();

    app.use(express.json());

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        
    });
}

setupAndStartServer();
