module.exports = {
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      chunkFilename: '[name].bundle.js',
    },
    mode: 'development',
    watch: true,
    devServer: {
        port: 3001
    },
    devtool: 'inline-source-map',
    
}