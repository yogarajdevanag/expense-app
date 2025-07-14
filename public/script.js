const form = document.getElementById('expense-form');
const list = document.getElementById('expense-list');

async function fetchExpenses() {
  const res = await fetch('/api/expenses');
  const data = await res.json();
  list.innerHTML = '';
  data.forEach(exp => {
    const li = document.createElement('li');
    li.innerHTML = `
      ₹${exp.amount} - ${exp.description} [${exp.category}]
      <button onclick="deleteExpense(${exp.id})">Delete</button>
    `;
    list.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const expense = {
    amount: document.getElementById('amount').value,
    description: document.getElementById('description').value,
    category: document.getElementById('category').value
  };
  await fetch('/api/add-expense', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(expense)
  });
  form.reset();
  fetchExpenses();
});

async function deleteExpense(id) {
  await fetch(`/api/expense/${id}`, { method: 'DELETE' });
  fetchExpenses();
}

window.onload = fetchExpenses;
