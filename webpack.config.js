const JavaScriptObfuscator = require('webpack-obfuscator');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      chunkFilename: '[name].bundle.js',
    },
    resolve: {
      extensions: [".js"]
    },
    plugins: [
     /*  new JavaScriptObfuscator ({
        rotateUnicodeArray: true
      }, ['excluded_bundle_name.js']), */
      new HtmlWebpackPlugin({template: './index.html'}),
     /*  new BundleAnalyzerPlugin() */
      /* new DashboardPlugin() */
    ],
    mode: 'development',
    watch: true,
    devServer: {
        port: 3001
    },
    devtool: 'inline-source-map',
    /* LOADERS */
    module: { 
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env','@babel/preset-react'],
              plugins:[
                '@babel/plugin-transform-runtime',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-async-to-generator'
              ]
            },
          }
        },
      ]
    }
    
}
