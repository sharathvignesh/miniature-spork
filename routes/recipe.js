var express = require('express');
var router = express.Router();
var db = require('../sql/client')

router.get('/', function (req, res) {
  db.query('SELECT * FROM recipes', function (err, result) {
    if (err) {
			res.statusCode = 400;
			return res.json({ success: false, message: err.message || 'Error getting data'});
		}
      res.status(200).send(result.rows);
  });
});

/* GET  recipe by id */
router.get('/:id', function(req, res) {
  const {params: {id}} = req
  db.query(`SELECT * FROM recipes WHERE id=${id}`, function (err, result) {
    if (err) {
			res.statusCode = 400;
			return res.json({ success: false, message: err.message || 'Error getting data'});
		}

    res.status(200).send(result.rows[0]);
  });
});


/* POST a new recipe */
router.post('/', function(req, res) {
  const {body: {id, title, making_time, serves, ingredients, cost, created_at, updated_at}} = req
  
  
  const query = `
    INSERT INTO recipes (id, title, making_time, serves, ingredients, cost, created_at, updated_at)
    VALUES (${id}, '${title}', '${making_time}', '${serves}', '${ingredients}', ${cost}, '${created_at}', '${updated_at}')
    `

  db.query(query, function (err, result) {
    if (err) {
			res.statusCode = 400;
			return res.json({ success: false, message: err.message || 'Error posting data'});
		}

    res.sendStatus(200);
  });
});

router.delete('/:id', (req, res) => {
  const {params: {id}} = req
  const query = `
    DELETE FROM recipes
    WHERE id = ${id}
  `;


  db.query(query, function (err, result) {
    if (err) {
			res.statusCode = 400;
			return res.json({ success: false, message: err.message || 'Error deleting data'});
		}

    res.sendStatus(200);
  });
});

module.exports = router;
