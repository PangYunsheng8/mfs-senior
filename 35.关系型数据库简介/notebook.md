### MySQL/MariaDB
##### 1. 常用指令
1)show databases:查看有哪些数据库
2)create database 数据库名:创建一个数据库
3)use 数据库名：将当前工作目录切换到该数据库下
4)show tables：查看当前数据库下有哪些表
5)创建一个表，名为users，里面有5个字段，分别是id,name,sex,age,tel   
create table users(
    `id` int not null auto_increment primary key,
    `name` varcahr(255) not null,
    `sex` varchar(4) not null, 
    `age` tinyint not null, 
    `tel` varchar(13)
);
##### 2. 常用sql语句
1)join操作：select * from users,articles where authorId = users.id;