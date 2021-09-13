const postgresql = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "amrendra",
    DB: "testdb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
module.exports = postgresql