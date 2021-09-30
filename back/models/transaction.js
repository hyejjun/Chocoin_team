const Sequelize = require('sequelize')

module.exports = class Transaction extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            a_orderid:{
                type:Sequelize.INTEGER,
                allowNull:false,
                comment:'매수자'
            },
            a_amout:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            a_commission:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            b_orderid:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            b_amout:{
                type:Sequelize.INTEGER,
                allowNull:false
            },
            b_commission:{
                type:Sequelize.INTEGER,
                allowNull:false
            },
            price:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            txid:{
                type:Sequelize.STRING(150),
                allowNull:false
            },
            regdate:{
                type:Sequelize.DATE,
                allowNull:false,
                regdate:'거래날짜'
            }          
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'Transaction',
            tableName:'transactions',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}