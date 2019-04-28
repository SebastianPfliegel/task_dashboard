module.exports = {
    development: {
        sequelize: {
            database: 'myapp',
            username: 'sa',
            password: 'myPW!123',
            config: {
                host: 'localhost',
                dialect: 'mssql',
                dialectOptions: {
                    options: {
                        appName: 'Task Dashboard'
                    }
                },
                define: {
                    timestamps: false
                },
                pool: {
                    max: 10,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                }
            }
        },
        api: {
            secret: 'x'
        }
    },
    production: {
        sequelize: {
            database: process.env.DB_NAME,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            config: {
                host: process.env.DB_HOSTNAME,
                dialect: 'mssql',
                dialectOptions: {
                    options: {
                        appName: 'Task Dashboard'
                    }
                },
                define: {
                    timestamps: false
                },
                pool: {
                    max: 10,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                }
            }
        },
        api: {
            secret: process.env.API_SECRET
        }
    }
};
