import React from "react";

function ExpenseItem({ expense, onDelete }) {
  return (
    <div className="expense-item">
      <h3>{expense.title}</h3>
      <p>₹{expense.amount}</p>
      <p>{new Date(expense.date).toLocaleDateString()}</p>
      <p><strong>{expense.type}</strong></p>
      <p>Category: {expense.category}</p>
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
