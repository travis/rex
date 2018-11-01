const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DEV_DB,
  POSTGRES_TEST_DB,
  POSTGRES_PROD_DB,
  POSTGRES_HOST = 'db'
} = process.env;

module.exports = {
  development: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DEV_DB,
    host: POSTGRES_HOST,
    dialect: 'postgres',
  },
  test: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_TEST_DB,
    host: POSTGRES_HOST,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_PROD_DB,
    host: POSTGRES_HOST,
    dialect: 'postgres',
  }
}
