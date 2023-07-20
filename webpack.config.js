const path = require("path");

module.exports = {
  entry: "./src/index.js",
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
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              "@babel/preset-react",
            ],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
};
