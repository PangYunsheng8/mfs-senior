### babel环境搭建和let const命令
1.在本地环境搭建batel命令
>1)npm init（注意文件夹名必须是URL friendly，否则报错）一直默认，安装好后会有一个package.json文件
>2)在目录下创建一个文件，名为.babelrc。里面写入{"presets": ["env", "es2017"]}
>3)执行命令npm install --save babel-cli
>4)在package.json文件下的script中加入"compile": "babel index.js --out-file index-compiled.js"
>5)安装persets，根据2)步骤中的内容来安装，例如npm install babel-preset-env或者npm install babel-preset-es2017
>6)编译：npm run compile

2.在当前环境下安装垫片：npm install babel-polyfill
