const path = require('path');

//*Including the html webpack plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    //* Set entry point of webpack bundling
    entry: "./src/app.js",
    
    //* Set output file name and path
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: '[name] [ext]'
    },


    module: {
        rules: [
            {
                test: /\.css$/, //* Match css files.
                use: ['style-loader', 'css-loader'] //* Use CSS Loaders 
            },
            
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/i, // Match image files
                use: ['file-loader'], // Use file loader
                type: 'asset/resource'
            }, 
            
            {
                test: /\.html$/, // Match HTML files
                use: ['html-loader'] // Use HTML loader
            }
        ]
    },

    //Add plugin here
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',

        }),
    ],

};
