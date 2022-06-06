const logger = require('../logs/logger')
const mongoose = require('mongoose')
const server = 'srv1:27017';
const database = '212628143racheli&faigy';
const dotenv = require('dotenv');
dotenv.config();
const connnectionString=process.env.DB_CONNECT
class dataBase {
    constructor() {
        this._connect();
    }
    _connect() {
        mongoose.connect(connnectionString)
            .then(() => {
                logger.info('database connection successful')

            })
            .catch(err => {
                logger.info('database connection successful')
            })
    }
}
module.exports = new dataBase();