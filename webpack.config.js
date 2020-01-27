const JavaScriptObfuscator = require('webpack-obfuscator');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      chunkFilename: '[name].bundle.js',
    },
    plugins: [
      new JavaScriptObfuscator ({
        rotateUnicodeArray: true
      }, ['excluded_bundle_name.js']),
      new HtmlWebpackPlugin({template: './index.html'})
    ],
    mode: 'development',
    watch: true,
    devServer: {
        port: 3001
    },
    devtool: 'inline-source-map',
    
}
