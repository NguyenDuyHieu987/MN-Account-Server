const express = require('express');
const router = express.Router();

const bankaccountController = require('../app/controllers/BankAccountController');

// router.get('/:slug', tvController.detail);
router.get('/getallaccount', bankaccountController.getAllAccount);
router.get('/getnumberofaccount', bankaccountController.getNumberOfAccounts);

module.exports = router;
