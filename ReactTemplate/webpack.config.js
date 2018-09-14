const webpack = require('webpack');
const env = require('yargs').argv.env;
const path = require('path');


let config = {};

switch (env) {
	case "dev":
    case "development":
        config = require('./config/webpack.dev')(path, __dirname);
		break;
	case "prod":
    case "production":
        config = require('./config/webpack.prod')(path, __dirname);
		break;
    case "unit-test":
        config = require('./config/test/webpack.unit')(path, __dirname);
        break;
    case "ui-test":
        config = require('./config/webpack.ui')(path, __dirname);
        break;
	default: throw new Error('unknown environment');
}

module.exports = config;