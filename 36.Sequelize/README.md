### 问答题
##### 1. 什么是ORM？和直接使用driver驱动数据库有什么区别？
ORM是对象关系映射（Object Relational Mapping）的简称。它将面向对象中的对象与数据库的数据联系起来，是我们操作数据库更加方便。
##### 2. 如何使用squelize的async/await 写法？
比如查询操作
```javascript
let res = await User.findAll({
    where:{
        id:{
            $lt:15
        }
    }
})
```
##### 3. 如何使用squelize定义数据库模型？
```javascript
const Sequelize = require('sequelize');
async function main() {
    const sequelize = new Sequelize('blog', 'root', 'pys5660789', {
        host: 'localhost',
        dialect: 'mysql',

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

    await sequelize.authenticate()
    console.log("连接成功！")
```
##### 4. 什么是数据库事务？如何使用在sequelize中使用事务？
事务是一个原子操作，为了防止一些意外发生造成的后果，事务中的所有操作要么全做，要么一个也不做。
```javascript
let res = await sequelize.transaction(async(t)=>{
    for (let i = 0; i < 10; i++){
        await User.create({
            firstName:"mafengshe"+i, lastName:"mark"+i
        })
    }
    return await User.find({firstName:"mafengshe1"})
})
```