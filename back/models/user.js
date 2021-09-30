const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userid:{
                type:Sequelize.STRING(50),
                allowNull:false
            },
            userpw:{
                type:Sequelize.STRING(255),
                allowNull:false
            },
            username:{
                type:Sequelize.STRING(10),
                allowNull:false
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'User',
            tableName:'users',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}