import React from 'react';
import ExpenseItem from './ExpenseItem';


const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div className="expense-list">
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ExpenseList;