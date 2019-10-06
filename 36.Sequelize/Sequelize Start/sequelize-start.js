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

    const User = sequelize.define('user', {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING
        }
    });
    const Article = sequelize.define('article',{
        title:{
            type: Sequelize.STRING
        },
        content:{
            type:Sequelize.TEXT
        }
    })
    User.hasMany(Article, )

    await User.sync()
    await Article.sync()

    let user = await User.find({
        where:{
            id:15
        }
    })
    console.log(user)
    let article = await Article.find({
        where:{
            id:1
        },
        include:[{
            model: User,
            where:{userId: Sequelize.col('User.id')}
        }]
    })
    console.log(article)

    //添加内容
    // for (let i = 0; i < 10; i++){
    //     await User.create({
    //         firstName:"mafengshe"+i, lastName:"mark"+i
    //     })
    // }
    //删除内容
    // await User.destory({
    //     where:{
    //         id:21
    //     }
    // })
    //更新内容
    // await User.updata({
    //     firstName:"mafengshe"
    // },{
    //     where:{
    //         id:20
    //     }
    // })
    //查询内容
    // let res = await User.findAll({
    //     where:{
    //         id:{
    //             $lt:15
    //         }
    //     }
    // })
    //对查询后的内容更新
    // for (user of res){
    //     user.firstName = 'yyy'
    //     await user.save()//update
    //     await user.destory()//delete
    // }

    // 插入/更新数据的另一种方式
    // let user = User.build({firstName:'xxxx', lastName:'xxx'})//这里只是是创建js中的对象，并没有插入到数据库中
    // await user.save()


    //事务
    let res = await sequelize.transaction(async(t)=>{
        for (let i = 0; i < 10; i++){
            await User.create({
                firstName:"mafengshe"+i, lastName:"mark"+i
            })
        }
        return await User.find({firstName:"mafengshe1"})
    })

}

main().catch(err => console.log(err))