
let config = require('./config');


function generate(path, dir) {
    let input = config.input;
    let output = config.output;

    return config = {
        mode: 'development',
        devtool: 'source-map',
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
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        'sass-loader?sourceMap'
                    ]
                },
                { test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/], loader: 'url-loader' },
                {
                    exclude: [/\.(js|jsx|mjs)$/, /\.(ts|tsx)$/, /\.(scss|css)$/, /\.html$/, /\.json$/],
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        publicPath: '',
                        context: 'src/'
                    }
                }
            ]
        }
    };
}


module.exports = generate;