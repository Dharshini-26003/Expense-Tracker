import React, { useState } from 'react';


const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    type: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount || !formData.date || !formData.category || !formData.type) return;
    onAddExpense({ ...formData, id: Date.now() });
    setFormData({ title: '', amount: '', date: '', category: '', type: '' });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input name="title" type="text" placeholder="Grocery" value={formData.title} onChange={handleChange} />
      <label htmlFor="amount">Amount: </label>
      <input name="amount" type="number" placeholder="6000" value={formData.amount} onChange={handleChange} />
      <label htmlFor="date">Date: </label>
      <input name="date" type="date" value={formData.date} onChange={handleChange} />
     <label htmlFor="category">Category: </label>
      
      <select name="category" value={formData.category} onChange={handleChange}>
        <option>-- Select --</option>
        <option>Bills</option>
        <option>Shopping</option>
        <option>Food</option>
        <option>Travel</option>
        <option>others</option>
      </select>
      <label htmlFor="type">Type: </label>
      <select name="type" value={formData.type} onChange={handleChange}>
        <option>-- Select --</option>
        <option>Income</option>
        <option>Expense</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;