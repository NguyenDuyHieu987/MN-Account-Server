const db = require('../../config/db');

class UserController {
  login(req, res) {
    const sql = 'SELECT * FROM bank_account LIMIT 10';
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  }
}

module.exports = new UserController();
