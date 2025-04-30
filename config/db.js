import Sequelize from 'sequelize';

const db = new Sequelize('franhr_viajes','franhr','Tiacarmen11',{
    host: 'mysql-franhr.alwaysdata.net',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAlias: false

});

export default db

