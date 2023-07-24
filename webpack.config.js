const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

const Client = {
    entry: "./src/client/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};

const Server = {
    entry: "./src/server/index.js",
    target: "node",
    externals: [nodeExternals()],
    output: {
        filename: "server.js",
        path: __dirname,
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                //use isomorphic-style-loader alternative to style-loader for ssr
                use: [{ loader: "style-loader" }, { loader: "css-loader" }],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
};



module.exports = [Client, Server];
