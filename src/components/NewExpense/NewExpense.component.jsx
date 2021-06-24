import React from "react";
import ExpensesForm from "../ExpensesForm/ExpensesForm.component";
import "./NewExpense.styles.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
