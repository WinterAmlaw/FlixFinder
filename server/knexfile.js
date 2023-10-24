require("dotenv").config();

module.exports = {
  development: {
    client: 'mysql2',   
    connection: {
      host: 'localhost', 
      user: 'root',      
      password: process.env.MYSQL_PASSWORD,  
      database: 'flixfinder'  
    },
    migrations: {
      directory: './db/migrations' 
    }
  }
};
