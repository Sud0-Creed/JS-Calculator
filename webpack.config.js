const path = require('path');

//*Including the html webpack plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  
    //* Set entry point of webpack bundling
    entry: "./src/app.js",
    
    //* Set output file name and path
    output: {
        filename: "main.js",
        clean: true,
        path: path.resolve(__dirname, "build"),
      assetModuleFilename: '[name] [ext]' 
        
    },

    devServer:{

        static:{
            directory: path.resolve(__dirname, 'dist'),
        },

        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,

    },


    module: {
        rules: [
            {
                test: /\.css$/, //* Match css files.
                use: ['style-loader', 'css-loader'] //* Use CSS Loaders 
            },
            
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/i, // Match image files
                type: 'asset/resource',
                use:[
                
                //* Image compression - Fixed output multiple images
                //* Fix: Removed the file loader
                {
                  loader: 'image-webpack-loader',
                  options: {

                    mozjpeg: {
                      progressive: true,
                      quality: 50
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                      enabled: false,
                    },
                    pngquant: {
                      quality: [0.65, 0.90],
                      speed: 4
                    },
                    gifsicle: {
                      interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                      quality: 75
                    }
                  }
                  
                },]
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
            inject: 'head',
            scriptLoading: 'defer',
            template: './src/index.html'

        }),
    ],

};
