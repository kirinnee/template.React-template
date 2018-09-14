module.exports = {
    input: {
        index: './src/index.tsx'
    },
    output: '[name].min.js',
    htmls: [
        {
            filename: 'index.html',
            title: 'Home',
            template: 'index.html',
            chunks: ['index']
        }
    ]
};