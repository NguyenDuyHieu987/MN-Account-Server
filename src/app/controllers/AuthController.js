const db = require('../../config/db');

class UserController {
  signup(req, res, next) {
    try {
      const sql = `INSERT INTO users (username, password, role, fullname, usertoken) VALUES ('${req.body.username}', '${req.body.password}', '${req.body.role}', '${req.body.fullname}', ${req.body.usertoken});`;

      const sql1 = `SELECT * FROM users WHERE username = '${req.body.username}'`;

      db.query(sql1, (err, response) => {
        if (response.length == 0) {
          db.query(sql, (err, response1) => {
            if (err) res.json({ success: false });
            else res.json({ success: true });
          });
        } else {
          res.json({ accountExist: true });
        }
      });
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  login(req, res, next) {
    try {
      const sql = `SELECT fullname, role, usertoken FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}'`;
      db.query(sql, (err, response) => {
        if (err) throw next(err);
        else res.json(response[0]);
      });
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }

  keepLogin(req, res, next) {
    try {
      const sql = `SELECT fullname, role FROM users WHERE usertoken = ${req.body.usertoken}`;

      db.query(sql, (err, response) => {
        if (err) throw next(err);
        res.json(response[0]);
      });
    } catch (error) {
      res.status(400).json({ message: 'Error' });
    }
  }
}

module.exports = new UserController();
