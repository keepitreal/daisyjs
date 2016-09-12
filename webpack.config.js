module.exports = {
    entry: "./src/scripts/index.ts",
    output: {
        filename: "./dist/bundle.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
        loaders: [
            { 
                test: /\.ts?$/,
                exclude: /node_modules/, 
                loader: "ts-loader" 
            }
        ],
        preLoaders: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "source-map-loader" 
            }
        ]
    }
};
