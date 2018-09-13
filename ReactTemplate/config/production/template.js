

let config = require('./config');

function generate(path,dir) {

    let input = config.input;
    let output = config.output;
    

    return config = {
        mode: 'production',
        entry: input,
        output: {
            filename: output,
            path: path.resolve(dir, './public/')
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        module: {
            rules: [
                { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
            ]
        }
    };
}

module.exports = generate;