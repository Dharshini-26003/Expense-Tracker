import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import "./index.css";
import './styles/ExpenseForm.css';
import './styles/ExpenseItem.css';
import './styles/ExpenseList.css';


const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
const [monthFilter, setMonthFilter] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const income = expenses
    .filter((e) => e.type === 'Income')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const expense = expenses
    .filter((e) => e.type === 'Expense')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = income - expense;
  const filteredExpenses = expenses.filter((e) => {
  const matchesCategory = categoryFilter ? e.category === categoryFilter : true;
  const matchesMonth = monthFilter
    ? new Date(e.date).getMonth() + 1 === parseInt(monthFilter)
    : true;
  return matchesCategory && matchesMonth;
});

  return (
    
<div className="app">
  <h1 className="heading">Expense Tracker</h1>
  <div className="filters">
  <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
    <option value="">All Categories</option>
    <option value="Bills">Bills</option>
    <option value="Shopping">Shopping</option>
    <option value="Food">Food</option>
  </select>

  <select value={monthFilter} onChange={(e) => setMonthFilter(e.target.value)}>
    <option value="">All Months</option>
    <option value="1">January</option>
    <option value="2">February</option>
    <option value="3">March</option>
    <option value="4">April</option>
    <option value="5">May</option>
    <option value="6">June</option>
    <option value="7">July</option>
    <option value="8">August</option>
    <option value="9">September</option>
    <option value="10">October</option>
    <option value="11">November</option>
    <option value="12">December</option>
  </select>
</div>

  <ExpenseForm onAddExpense={handleAddExpense} />

  <div className="summary-boxes">
    <div className="box income">Income: ₹{income}</div>
    <div className="box expense">Expenses: ₹{expense}</div>
    <div className="box balance">Balance: ₹{balance}</div>
  </div>
     <ExpenseList expenses={filteredExpenses} onDelete={handleDeleteExpense} />
  </div>
  );
};

export default App;