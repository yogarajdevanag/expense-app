const Expense = require('../models/expense');

exports.addExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.findAll();
  res.json(expenses);
};

exports.deleteExpense = async (req, res) => {
  const id = req.params.id;
  await Expense.destroy({ where: { id } });
  res.json({ message: 'Deleted successfully' });
};

// Bonus: Edit Expense
exports.updateExpense = async (req, res) => {
  const id = req.params.id;
  await Expense.update(req.body, { where: { id } });
  res.json({ message: 'Updated successfully' });
};
