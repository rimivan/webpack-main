# 📦 WEBPACK SIMPLE PROJECT 💥

## CREATED ON 3.11.2019

### DESCRIPTION

Webpack project ready to use to perform a simple task:

* Resolve static resources producing a bundle 

  <img src="C:\Users\SI2001\Desktop\screens\webpack.jpg" alt="webpack" style="zoom: 150%;" />

  ```
  * Fig. 1: Webpack official site https://webpack.js.org/ *
  ```

#### Webpack works as follow:

* Read an entry file Javascript `entry: "./index.js",`
* Resolve all dependencies _(in this case only Js scripts)_ producing a _bundle_ `output: {filename: "bundle.js}"`; bundle is added in html page
  *  _Dynamic Import_ (Ref: https://webpack.js.org/guides/code-splitting/)
     * 'script_1.js' and 'script_2.js' are dynamically imported
  *  'script_3.js' is imported synchronously
* Produce _source-map_
* Serve project with _devServer_ on port 3001

##### 🗃Branch _master🗃_

* Added _HtmlWebpackPlugin_ plugin to watch html index file 

* Added _JavaScriptObfuscator_ plugin(it is commented in webpack.config.js; de-commend to reintegrate)

* Added _BundleAnalyzerPlugin_ plugin to show details on bundle(it is commented in webpack.config.js; de-commend to reintegrate) 

  

##### :sparkles:Branch feature/webpack-react :sparkles:

* Added and configured Babel loader to transpile React code

* Rendered a simple React component to a hook in html

  `ReactDOM.render(ExamplePage(), document.getElementById('example-react-container'));`

### WHAT WE NEED

* Node JS (tested on v12.14.1)



### :children_crossing:USAGE:children_crossing:

* npm install 
* npm run build
* npm run start



## AUTHOR: IR
