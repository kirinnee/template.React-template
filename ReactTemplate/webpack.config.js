const webpack = require('webpack');
const env = require('yargs').argv.env;
const path = require('path');


let config = {};

switch (env) {
	case "dev":
    case "development":
        config = require('./config/development/template')(path, __dirname);
		break;
	case "prod":
    case "production":
        config = require('./config/production/template')(path, __dirname);
		break;
    case "test":
        config = require('./config/test/template')(path, __dirname);
		break;
	default: throw new Error('unknown environment');
}

module.exports = config;