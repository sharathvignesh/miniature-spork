var pg = require('pg');

pg.defaults.ssl = true;

const conString = process.env.DB_CONNECTION_STRING

var client = new pg.Client(conString);
client.connect();

client.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Connection successful');
});

module.exports = client;