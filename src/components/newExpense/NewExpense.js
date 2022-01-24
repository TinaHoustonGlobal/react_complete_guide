import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "../../css/NewExpense.css";

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormVisible(false);
  };

  const addNewExpense = () => {
    setFormVisible(true);
  };

  const cancelAddExpense = () => {
    setFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!formVisible && <button onClick={addNewExpense}>Add new expense</button>}
      {formVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={cancelAddExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
