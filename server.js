var geddy = require('geddy');

console.log("-------starting server in " + (process.env.NODE_ENV || 'development_mongo') + " mode------------");

process.env.NODE_ENV = 'development';

geddy.start({
  environment: process.env.NODE_ENV || 'development_mongo'
});
