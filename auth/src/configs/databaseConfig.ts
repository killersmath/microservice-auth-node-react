export default Object.freeze({
    DB_USER: process.env.DB_USERNAME ?? "postgres",
    DB_PASSWORD: process.env.DB_PASSWORD ?? "postgres",
    DB_HOST: process.env.DB_HOST ?? "127.0.0.1",
    DB_PORT: process.env.DB_PORT ?? 5432,
    DB_NAME: process.env.DB_NAME ?? "postgres",
    DIALECT: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
});