import React from 'react';


const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <div className="expense-item">
      <h3>{expense.title}</h3>
      <p>₹{expense.amount}</p>
      <p>{expense.date}</p>
      <p>Type: {expense.type}</p>
      <p>Category: {expense.category}</p>
      <p><button onClick={() => onDelete(expense.id)}>Delete</button></p>
    </div>
  );
};

export default ExpenseItem;