const express = require('express');
const router = express.Router();
const controller = require('../controllers/expenseController');

router.post('/add-expense', controller.addExpense);
router.get('/expenses', controller.getExpenses);
router.delete('/expense/:id', controller.deleteExpense);
router.put('/expense/:id', controller.updateExpense); // Optional

module.exports = router;
