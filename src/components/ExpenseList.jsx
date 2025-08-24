import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete }) {
  return (
    <div className="expense-list">
      {expenses.length === 0 ? (
        <p>No transactions added yet.</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default ExpenseList;
