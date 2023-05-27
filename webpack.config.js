
const path = require('path');

// All config goes in here
module.exports = {

    //* Set entry point of webpack bundling
    entry: "./src/app.js",

    //* Set output file name and path
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
} 
