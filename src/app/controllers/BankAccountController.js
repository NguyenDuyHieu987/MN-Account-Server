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

  addAccount(req, res, next) {
    try {
      const sql = `INSERT INTO bank_account (id, name, phone, iban, pin, address, balance, email, date) VALUES ('${req.body.name}', '${req.body.phone}', '${req.body.iban}', '${req.body.pin}', '${req.body.address}', ${req.body.balance}, '${req.body.email}', '${req.body.date}') `;
      db.query(sql, (err, response) => {
        if (err) res.json({ success: false });
        res.json({ success: true });
      });
    } catch (error) {
      res.status(400).json({ message: 'Error 404' });
    }
  }

  updateAccount(req, res, next) {
    try {
      const sql = `UPDATE bank_account SET name = '${req.body.name}', phone = '${req.body.phone}', iban = '${req.body.iban}', pin = '${req.body.pin}', address = '${req.body.address}', balance = ${req.body.balance}, email = '${req.body.email}', date = '${req.body.date}' WHERE id = ${req.body.id}`;
      db.query(sql, (err, response) => {
        if (err) res.json({ success: false });
        res.json({ success: true });
      });
    } catch (error) {
      res.status(400).json({ message: 'Error 404' });
    }
  }

  removeAccount(req, res, next) {
    try {
      const sql = `DELETE FROM bank_account WHERE id = ${req.body.id}`;
      db.query(sql, (err, response) => {
        if (err) res.json({ success: false });
        res.json({ success: true });
      });
    } catch (error) {
      res.status(400).json({ message: 'Error 404' });
    }
  }
}

module.exports = new BankAccountController();
