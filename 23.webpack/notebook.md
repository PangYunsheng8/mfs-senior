##### 自动webpack编译
在webpack.config.js中加入: devtool: "cheap-eval-source-map"
webpack --progress --watch
##### 浏览器自动刷新
cnpm install --save-dev webpack-dev-server
webpack-dev-server --open