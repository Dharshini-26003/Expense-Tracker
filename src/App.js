import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Add new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Calculate totals
  const income = expenses
    .filter((exp) => exp.type === "Income")
    .reduce((acc, exp) => acc + exp.amount, 0);

  const expenseTotal = expenses
    .filter((exp) => exp.type === "Expense")
    .reduce((acc, exp) => acc + exp.amount, 0);

  const balance = income - expenseTotal;

  return (
    <div className="App">
      <h1>💲 Expense Tracker</h1>

      <div className="summary">
        <span className="income">Income: ₹{income}</span>
        <span className="expense">Expenses: ₹{expenseTotal}</span>
        <span className="balance">Balance: ₹{balance}</span>
      </div>

      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
