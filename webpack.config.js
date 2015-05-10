var webpack = require("webpack"),
    path = require("path");

module.exports = {
	entry: "./src/Main",

	output: {
        path: __dirname,
        filename: "build/bundle.js",
        sourceMapFilename: "[file].map"
    },

    module: {
        loaders: [
        	{ 
                test: /\.js$/,   
                loader: 'babel-loader?optional=runtime', 
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        // new webpack.PrefetchPlugin("react")
    ],

    devtool: 'inline-source-map'
}