const path = require('path');

module.exports = {

    //* Set entry point of webpack bundling
    entry: "./src/app.js",
    
    //* Set output file name and path
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },


    module: {
        rules: [
            {
                test: /\.css$/, //* Match css files.
                use: ['style-loader', 'css-loader'] //* Use CSS Loaders 
            },
            
            {
                test: /\.(png|jpe?g|gif|svg)$/, // Match image files
                use: ['file-loader'] // Use file loader
            }, 
            
            {
                test: /\.html$/, // Match HTML files
                use: ['html-loader'] // Use HTML loader
            }
        ]
    }
};
