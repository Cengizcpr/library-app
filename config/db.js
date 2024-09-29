import dotenv from 'dotenv';
dotenv.config();

const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME
} = process.env;

const dbConfig = {
    HOST: DB_HOST,
    USER: DB_USER,
    PASSWORD: DB_PASS,
    DB: DB_NAME,
    dialect: "postgres"
};

export default dbConfig;
