require('dotenv').config();

const config = {
  PP_KEY: 'geNCa0DVhourreytmO8vvLrk7M7xApHuVNsU3DYp'
}

export default config

module.exports = {

  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "user_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "user_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}