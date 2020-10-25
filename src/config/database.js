require('dotenv').config(); // config data from .env for security (and convenience) reasons

module.exports = {
  // building connection object
  uri: `${process.env.DB_PROTO}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,
  options: { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
};
