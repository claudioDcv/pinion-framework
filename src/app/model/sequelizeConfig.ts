const sequilizeConfig = (storageFile) => {
    return {
        database: 'database',
        username: 'username',
        password: 'password',
        host: 'localhost',
        dialect: 'sqlite',//'mysql'|'sqlite'|'postgres'|'mssql',
        operatorsAliases: false,
      
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
      
        // SQLite only
        storage: storageFile('database.sqlite')
      }
}

export default sequilizeConfig