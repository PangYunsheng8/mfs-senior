##### 使用vue+webpack创建工程化项目
1)如何没有全局安装vue-cli，安装：
vnpm install -g vue-cli
2)使用webpack和vue创建一个工程化项目:
vue init webpack vue-start(项目名)
3)创建好项目后安装相关的依赖：
cnpm install
4)现在即可运行程序：
npm run dev/npm start

##### 使用webpack打包项目
运行指令npm run build
会在根目录下生成一个dist文件夹，里面保存了打包好的文件

##### 补充：使用stylus样式
1)安装stylus编译器：cnpm install --save-dev stylus
2)安装stylus-loader：cnpm install --save-dev stylus-loader(告诉webpack怎么处理stylus)
3)在vscode中安装stylus代码高亮插件

##### vue单文件组件