const dbConfig = {
    user: "sa",
    password: "user4321",
    server: "localhost",
    database: "node_api",
    options: {
        encrypt: false,
        trustServerCertificate: true
    },
    port: 1433
}

module.exports = dbConfig;