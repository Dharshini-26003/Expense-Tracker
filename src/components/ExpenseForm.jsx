import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date || !category || !type) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date,
      category,
      type,
    };

    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
    setType("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />

      <label>Amount:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />

      <label>Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label>Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>-- Select --</option>
        <option>Bills</option>
        <option>Shopping</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Other</option>
      </select>

      <label>Type:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>-- Select --</option>
        <option>Income</option>
        <option>Expense</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
