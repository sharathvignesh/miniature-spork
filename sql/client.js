const { Pool, Client } = require('pg')

const conString = process.env.DB_CONNECTION_STRING

const pool = new Pool({
    connectionString: conString,
    ssl: {
        rejectUnauthorized: false,
      },
  })

  pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('pool Connection successful');

  })

  const client = new Client({
    connectionString: conString,
    ssl: {
        rejectUnauthorized: false,
    },
  })

  client.connect()
  
// var client = new pg.Client(conString);
// client.connect();

client.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Connection successful');
});

module.exports = client;