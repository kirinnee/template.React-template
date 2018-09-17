const config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function generate(path, dir) {
    let input = config.input;
    let htmls = config.htmls;

    let plugins = [];

    for (var i = 0; i < htmls.length; i++) {
        htmls[i].template = "src/" + htmls[i].template;
        plugins.push(new HtmlWebpackPlugin(htmls[i]));
    }


    return {
        mode: 'development',
        devtool: 'source-map',
        entry: input,
        output: {
            filename: '[name].js',
            path: path.resolve(dir, './dev/')
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        module: {
            rules: [
                { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                {
                    test: /\.(scss|css)$/,
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
        },
        plugins: plugins
    };
}


module.exports = generate;