// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'fancy_todo_list_development',
    },
    migrations: {
      directory: 'db/migrations'
    }
  }

};
