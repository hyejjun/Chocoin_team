const Sequelize = require('sequelize')

module.exports = class Asset extends Sequelize.Model{
    static init(sequelize){
        return super.init({
           pk:{
               type:Sequelize.INTEGER,
               allowNull:false,
               comment:'primary key'
           },
           input:{
                type:Sequelize.INTEGER,
                allowNull:false
           },
           output:{
                type:Sequelize.INTEGER,
                allowNull:false
           },
           regdate:{
               type:Sequelize.DATE,
               allowNull:false,
               defaultValue:Sequelize.NOW,
               comment:'거래날짜'
           }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'Asset',
            tableName:'assets',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}