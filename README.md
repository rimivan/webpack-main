# WEBPACK SIMPLE PROJECT 
## CREATED ON 3.11.2019
## UPDATED ON 21.1.2020
    * USED WEBPACK _DYNAMIC IMPORT_ TO IMPORT MODULES(LOOK AT WEBPACK OFFICIAL WEBSITE - CODE SPLITTING)
### WHAT WE NEED
* A BROWSER
* YOUR FAVOURITE SHELL
* NODE JS V . . .
* NPM V . . .
* YOUR FAVOURITE IDE

## AUTHOR: IR

# QUESTIONS:
1. WEBPACK RISOLVE DI DEFAULT I MODULI OPPURE SERVE QUALCHE LOADER
    BACKUP DEL CONFIG

    const path = require('path');
    module.exports = {
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    watch: true,
    devServer: {
        port: 3001
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      }
    }

    COS'E' REQUIRE PATH? A COSA SERVE?
    BABEL LOADER COSA FA?