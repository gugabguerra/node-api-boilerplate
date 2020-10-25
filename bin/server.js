require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

class App {
  constructor() {
    // Prototyping class
    this.express = express();

    this.database();
    this.middlewares();
    this.server();
    this.routes();
  }

  server() {
    this.express.listen(process.env.SRV_PORT, () =>
      console.log(`Server running in ${process.env.NODE_ENV} mod on port ${process.env.SRV_PORT}`)
    );
  }

  database() {
    const db = require('../src/config/database');
    mongoose.connect(db.uri, db.options);
  }

  middlewares() {
    // JSON parser
    this.express.use(express.json());

    // CORS handler
    const corsOptions = {
      origin: (origin, callback) => {
        if (process.env.CORS_WHITELIST.indexOf(origin) !== -1) callback(null, true);
        else callback(new Error(`Not allowed by CORS ${origin}`));
      },
    };
    this.express.use(cors(corsOptions));

    // Logging
    if (process.env.NODE_ENV === 'development') this.express.use(morgan('dev'));
    else this.express.use(morgan());
  }

  routes() {
    this.express.use(require('../src/config/routes'));
  }
}
module.exports = new App().express;
