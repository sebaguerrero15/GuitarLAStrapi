module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceihe9cgqg4dlfbih9l0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_4blg'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'jsqZbbrlspFFb4xZDmvUc1q9siq0m8XM'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
