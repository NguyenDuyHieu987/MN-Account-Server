const db = require('../../config/db');

class BankAccountController {
  getAllAccount(req, res, next) {
    try {
      const sql = `SELECT * FROM bank_account LIMIT 10 OFFSET ${
        req.query.page * 10
      }`;
      db.query(sql, (err, response) => {
        if (err) next(err);
        res.json(response);
      });
    } catch (error) {
      res.status(400).json({ message: 'Error 404' });
    }
  }

  getNumberOfAccounts(req, res, next) {
    try {
      const sql = 'SELECT COUNT(*) AS result FROM bank_account';
      db.query(sql, (err, response) => {
        if (err) next(err);
        res.json(response[0]);
      });
    } catch (error) {
      res.status(400).json({ message: 'Error 404' });
    }
  }
}

module.exports = new BankAccountController();
