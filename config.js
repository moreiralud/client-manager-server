const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'freedb.tech',
    user: env.DB_USER || 'freedbtech_moreiralud',
    password: env.DB_PASSWORD || '40028922',
    database: env.DB_NAME || 'freedbtech_clients',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
