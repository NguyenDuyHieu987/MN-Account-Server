const db = require('../../config/db');

class UserController {
  login(req, res, next) {
    const sql = `SELECT * FROM users WHERE username='${req.body.username}' AND password='${req.body.password}'`;
    db.query(sql, (err, response) => {
      if (err) throw next(err);
      res.json(response[0]);
    });
  }
}

module.exports = new UserController();
